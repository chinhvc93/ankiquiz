# Quiz HTML to JSON Parser

Công cụ hỗ trợ chuyển đổi dữ liệu câu hỏi từ file HTML/MHTML sang định dạng JSON để import vào hệ thống.

## 1. Yêu cầu hệ thống (requirements.txt)

Cài đặt các thư viện cần thiết bằng lệnh:

```bash
pip install beautifulsoup4 lxml

```

## 2. Cấu trúc thư mục

Trước khi chạy, hãy đảm bảo cấu trúc thư mục như sau:

* `QuizDataParser.py`: File script Python.
* `input/`: Thư mục chứa các file `.html` hoặc `.mhtml` đầu vào.

## 3. Cách chạy script

### Chạy trực tiếp và nhập tham số thủ công:

```bash
python QuizDataParser.py

```

### Chạy nhanh với tham số mặc định:

Khi script hỏi, bạn có thể nhấn **Enter** liên tiếp để sử dụng giá trị mặc định:

1. **Input folder**: `input`
2. **Output file**: `quiz_data.json`
3. **Image Prefix**: `https://img.localhost`

## 4. Lưu ý

* Đảm bảo tên file ảnh trong thẻ `<img>` của file HTML khớp với file ảnh bạn lưu trên server.
* Script sẽ tự động gộp nội dung các Replies trong phần Discussion vào cùng một câu hỏi.
