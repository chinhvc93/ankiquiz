# pip install beautifulsoup4 lxml

import os
import json
import re
from bs4 import BeautifulSoup

class QuizDataParser:
    def __init__(self, input_folder='input', output_file='quiz_data.json', img_prefix='https://img.localhost'):
        self.input_folder = input_folder
        self.output_file = output_file
        self.img_prefix = img_prefix.rstrip('/')
        self.results = []

    def process_images_in_element(self, element):
        """Tìm tất cả thẻ img, chỉ lấy tên file và nối với prefix mới."""
        if not element: return
        for img in element.find_all('img'):
            old_src = img.get('src', '')
            if old_src:
                # Lấy tên file (vd: image7.png) từ đường dẫn bất kỳ
                file_name = os.path.basename(old_src)
                img['src'] = f"{self.img_prefix}/{file_name}"
                img['class'] = "w-100" # Thêm class để hiển thị tốt trên web

    def clean_html_string(self, element, is_choice=False):
        """Làm sạch HTML, xử lý ảnh và trả về string."""
        if not element: return ""
        
        # 1. Xử lý ảnh trước
        self.process_images_in_element(element)
        
        # 2. Nếu là câu trả lời, xóa thẻ chứa chữ cái A, B, C để tránh lặp text
        if is_choice:
            letter_tag = element.find('span', class_='multi-choice-letter')
            if letter_tag:
                letter_tag.decompose() # Xóa hẳn thẻ khỏi cây HTML
        
        # 3. Xóa các badge Most Voted thừa
        for badge in element.find_all('span', class_='badge'):
            badge.decompose()

        # 4. Lấy nội dung HTML
        content = element.decode_contents().strip()
        
        # 5. Clean chuỗi (logic commonReplace)
        content = content.replace('\t', ' ').replace('\xa0', '')
        content = content.replace('\n', '<br>')
        content = re.sub(r'(<br>\s*){2,}', '<br>', content) # Gộp br thừa
        return content

    def get_answer_and_feedback(self, block):
        """Lấy chữ cái đáp án và nội dung feedback (có thể chứa ảnh)."""
        # Ưu tiên lấy chữ cái từ Community Vote (Voted Answer)
        voted_bar = block.find('div', class_='vote-bar')
        voted_letter = ""
        if voted_bar:
            match = re.search(r'([A-H])', voted_bar.get_text())
            if match: voted_letter = match.group(1)

        # Lấy nội dung từ Suggested Answer (Correct Answer Box)
        suggested_box = block.find('span', class_='correct-answer')
        feedback_html = ""
        
        if suggested_box:
            # Nếu đáp án là hình ảnh (Hotspot)
            if suggested_box.find('img'):
                feedback_html = self.clean_html_string(suggested_box)
                if not voted_letter: voted_letter = "See Image"
            else:
                # Nếu đáp án là chữ
                text_ans = suggested_box.get_text(strip=True)
                feedback_html = text_ans
                if not voted_letter: voted_letter = text_ans

        return voted_letter, feedback_html

    def parse_file(self, file_path):
        print(f"--- Đang xử lý: {os.path.basename(file_path)} ---")
        try:
            with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                soup = BeautifulSoup(f.read(), 'lxml')

            # Tìm các khối câu hỏi
            blocks = soup.find_all('div', class_='question-body')
            
            for block in blocks:
                container = block.find_parent('div', class_='sec-spacer') or \
                            block.find_parent('div', class_='discussion-header-container') or block
                
                # 1. Question ID
                q_id = "#0"
                header = container.find('div', class_='question-discussion-header')
                if header:
                    match = re.search(r'Question #:\s*(\d+)', header.get_text())
                    if match: q_id = f"#{match.group(1)}"

                # 2. Question Text
                q_text_elem = block.find('p', class_='card-text')
                question_html = self.clean_html_string(q_text_elem)

                # 3. Đáp án & Feedback (Xử lý ảnh hotspot ở đây)
                correct_letter, feedback_content = self.get_answer_and_feedback(container)

                # 4. Lựa chọn (Choices)
                parsed_choices = []
                choice_items = block.select('.question-choices-container ul li')
                for li in choice_items:
                    # Lấy letter để so khớp
                    letter_span = li.find('span', class_='multi-choice-letter')
                    this_letter = ""
                    if letter_span:
                        this_letter = letter_span.get('data-choice-letter', '').strip()
                        if not this_letter:
                            this_letter = letter_span.get_text(strip=True).replace('.', '')
                    
                    # Nội dung đã bỏ chữ A. B. C.
                    choice_body = self.clean_html_string(li, is_choice=True)
                    
                    parsed_choices.append({
                        "choice": f"<p>{choice_body}</p>",
                        "correct": this_letter in correct_letter if (this_letter and correct_letter) else False,
                        "feedback": ""
                    })

                # 5. Thảo luận (discusstion)
                discussion_data = []
                comment_blocks = container.find_all('div', class_='comment-container')
                for cb in comment_blocks:
                    c_id = cb.get('data-comment-id', '0')
                    content_divs = cb.find_all('div', class_='comment-content')
                    main_txt = self.clean_html_string(content_divs[0]) if content_divs else ""
                    
                    if len(content_divs) > 1:
                        replies = "".join([f"<li>{self.clean_html_string(div)}</li>" for div in content_divs[1:]])
                        main_txt += f"<br><div>Replies:</div><ul>{replies}</ul>"

                    discussion_data.append({
                        "id": int(c_id) if str(c_id).isdigit() else 0,
                        "date": cb.find('span', class_='comment-date').get('title', '') if cb.find('span', class_='comment-date') else "",
                        "username": cb.find('h5', class_='comment-username').get_text(strip=True) if cb.find('h5', class_='comment-username') else "user",
                        "content": main_txt,
                        "upvote_count": cb.find('span', class_='upvote-count').get_text(strip=True) if cb.find('span', class_='upvote-count') else "0",
                        "selected_answers": cb.find('div', class_='comment-selected-answers').get_text(strip=True) if cb.find('div', class_='comment-selected-answers') else ""
                    })

                self.results.append({
                    "question_id": q_id,
                    "topic_id": 1,
                    "course_id": 1,
                    "case_study_id": None,
                    "lab_id": 0,
                    "question_text": f"<p>{question_html}</p>",
                    "mark": 1,
                    "is_partially_correct": len(correct_letter) > 1 and correct_letter != "See Image",
                    "question_type": "1",
                    "difficulty_level": "0",
                    "general_feedback": f"<p>Correct Answer: {feedback_content}</p>",
                    "is_active": True,
                    "answer_list": [{
                        "question_answer_id": 1,
                        "question_id": q_id,
                        "answers": parsed_choices
                    }],
                    "topic_name": soup.title.string.strip() if soup.title else "",
                    "discusstion": discussion_data 
                })
        except Exception as e:
            print(f"Lỗi: {e}")

    def run(self):
        if not os.path.exists(self.input_folder):
            os.makedirs(self.input_folder)
            return
        for file in os.listdir(self.input_folder):
            if file.endswith(('.html', '.mhtml')):
                self.parse_file(os.path.join(self.input_folder, file))

        with open(self.output_file, 'w', encoding='utf-8') as f:
            json.dump({"msg": "Quiz Questions", "data": self.results}, f, ensure_ascii=False, indent=2)
        print(f"\n>> Hoàn tất! Đã xuất {len(self.results)} câu hỏi.")

if __name__ == "__main__":
    in_dir = input("Thư mục input (mặc định 'input'): ") or "input"
    out_f = input("File output (mặc định 'quiz_data.json'): ") or "quiz_data.json"
    prefix = input("Prefix ảnh (mặc định 'https://img.examtopics.com/aws-certified-ai-practitioner-aif-c01'): ") or "https://img.examtopics.com/aws-certified-ai-practitioner-aif-c01"
    
    parser = QuizDataParser(in_dir, out_f, prefix)
    parser.run()