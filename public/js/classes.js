class Question {
  constructor() {
    this.queNo = "";
    this.question_id = "";
    this.question_text = "";
    this.question_type = 1;
    this.general_feedback = "";
    this.answer_list = "";
    this.topic_name = "";
    this.is_partially_correct = false;
  }

  loadData(queData, queNo) {
    this.queNo = queNo;
    this.question_id = queData.question_id;
    this.question_text =  queData.question_text;
    this.question_type = queData.question_type;
    this.general_feedback = queData.general_feedback;
    this.answer_list = queData.answer_list[0].answers;
    this.topic_name = queData.topic_name;
    this.is_partially_correct = queData.is_partially_correct;
  }

  getQuestion(queNo, queData, choiceAnswer, isMarked = false) {
    // Load Question Data
    this.loadData(queData, queNo);

    // Show Question Number
    this.showQueNumber(this.queNo);

    // Load Quesion
    this.loadQueTextHtml();

    // Load Answer
    this.loadQueAnswerHtml(
      false,
      choiceAnswer
    );

    //Mark Current Question
    this.markQuestion();

    // Load isMarked
    this.showMarkToReview(isMarked);

    // Clean
    $(".explanation-block").html("");
    $(".comment-block").html("");
    $(".btn-showAnswer").removeClass("show");
    $(".btn-showAnswer").text("Show Answer");

    return "Load Question Successfully!";
  }

  loadQueTextHtml() {
    $(".que-text").html(this.question_text);
    $("#queDomain").text(`${this.question_id} ${this.topic_name}`);
  }

  loadQueAnswerHtml(
    isShowAnswer = false,
    choiceAwswer
  ) {
    let self = this;
    var htmlText = "";
    var SYMBOL_ANSWERS = ["A", "B", "C", "D", "E", "F", "G", "H"];
    this.answer_list.forEach(function (answer, index) {
      let queContentAwnswer = "";
      if (isShowAnswer) {
        queContentAwnswer = answer.correct ? "true" : "false";
      }

      let checked = "";
      if (
        choiceAwswer != "" &&
        choiceAwswer.indexOf(SYMBOL_ANSWERS[index]) >= 0
      ) {
        checked = "checked";
      }

      let htmlRadioCheckbox = "";
      if (!self.isPartiallyCorrect) {
        // One Choice: radio input
        htmlRadioCheckbox = `<input class="ip-radio" type="radio" name="radio" ${checked} value="${SYMBOL_ANSWERS[index]}">`;
      } else {
        // Multiple Choices: checkbox input
        htmlRadioCheckbox = `<input class="ip-radio" type="checkbox" ${checked} value="${SYMBOL_ANSWERS[index]}">`;
      }

      htmlText += `
      <label class="my-2 custom_label">
          ${htmlRadioCheckbox}
          <span class="que-content ${queContentAwnswer}">
              <span class="symbolAnswer">${SYMBOL_ANSWERS[index]}.</span>
              ${answer.choice}
          </span>
      </label>
      `;

      // load html
      $("fieldset.que-list").html(htmlText);
    });
  }

  markQuestion() {
    $("#attempts-que li").removeClass("current");
    $(`#attempts-que li[data-queno="${this.queNo}"]`).addClass("current");
  }

  markChoice(queNo, isChoice = true) {
    if (isChoice) {
      $(`#attempts-que li[data-queno="${queNo}"]`).addClass("choice");
    } else {
      $(`#attempts-que li[data-queno="${queNo}"]`).removeClass("choice");
    }
  }

  markToReview(queNo, isMarked = false) {
    if (isMarked) {
      $(`#attempts-que li[data-queno="${queNo}"]`).addClass("review");
    } else {
      $(`#attempts-que li[data-queno="${queNo}"]`).removeClass("review");
    }
  }

  showQueNumber(queNo = 0) {
    $(".total-questions").text(`Question ${queNo + 1} of ${queDataCount}`);
  }

  showQueAnswerHtml(queData, choiceAnswer, isShowAnswer = false) {
    if (isShowAnswer) {
      $(".explanation-block").html(`
        <h6>Explanation: </h6>
        ${queData.general_feedback}
      `);
    } else {
      $(".explanation-block").html("");
    }

    this.loadQueAnswerHtml(
      isShowAnswer,
      choiceAnswer
    );
  }

  showCommentHtml(myComment = "", isShowAnswer = false) {
    let htmlMyComment = `<h6>My Comment <a class="btnEditComment btn btn-sm btn-warning">Edit</a></h6>`
    if(myComment != "" && isShowAnswer == true) {
      htmlMyComment += `
        <div class="textComment p-3 mb-2 bg-success text-white">
          ${myComment.replaceAll("\n", "<br>")}
        </div>
      `;
    }

    htmlMyComment += `
      <div class="edit-comment-block"></div>
    `

    $(".comment-block").html(htmlMyComment);
  }

  showMarkToReview(isMarked) {
    if(isMarked) {
      $("#starMarkToReview").addClass("true");
    } else {
      $("#starMarkToReview").removeClass("true");
    }
  }

  showQueListNumber(count = 0) {
    var liQuestHtml = "";
    for (let i = 0; i < count; i++) {
      liQuestHtml += `
      <li data-queno="${i}" class="">${i + 1}</li>
      `;
    }
    $("#attempts-que ul").html(liQuestHtml);
  }
}

class Exam {
  constructor(listQuestions = [], cacheItemId = "default") {
    this.listQuestions = listQuestions;
    this.count = listQuestions.length;
    this.current = 0;
    this.choices = [];
    this.markedQuestion = [];
    this.cacheItemId = cacheItemId;
    this.comments = [];
  }

  currentQuestion() {
    return this.listQuestions[this.current];
  }

  nextQuestion() {
    this.current += 1;
    if (this.current >= this.count) {
      this.current = 0;
    }

    return this.current;
  }

  prevQuestion() {
    this.current -= 1;
    if (this.current < 0) {
      this.current = this.count - 1;
    }

    return this.current;
  }

  getQuestion(queNo = 0) {
    return this.listQuestions[queNo];
  }

  saveChoice(queNo, aws) {
    let elementIndex = this.choices.findIndex((obj) => obj.queNo == queNo);
    let newElement = {
      queNo: queNo,
      choice: aws,
    };
    if (elementIndex == -1) {
      this.choices = [...this.choices, newElement];
    } else {
      this.choices[elementIndex] = newElement;
    }
  }

  getChoice(queNo = this.current) {
    let elementIndex = this.choices.findIndex((obj) => obj.queNo == queNo);
    if (elementIndex == -1) {
      return "";
    } else {
      return this.choices[elementIndex].choice;
    }
  }

  saveMarkToReview(queNo, isMarked) {
    let elementIndex = this.markedQuestion.findIndex(
      (obj) => obj.queNo == queNo
    );
    let newElement = {
      queNo: queNo,
      isMarked: isMarked,
    };

    if (elementIndex == -1) {
      this.markedQuestion = [...this.markedQuestion, newElement];
    } else {
      this.markedQuestion[elementIndex] = newElement;
    }
  }

  getMarkToReview(queNo = this.current) {
    let elementIndex = this.markedQuestion.findIndex(
      (obj) => obj.queNo == queNo
    );
    if (elementIndex == -1) {
      return false;
    } else {
      return this.markedQuestion[elementIndex].isMarked;
    }
  }

  showResult() {
    var resultBlock = "";
    let total_point = 0;
    resultBlock += `
    <table class="table table-sm">
      <thead class="thead-light">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Question</th>
          <th scope="col">Point</th>
          <th scope="col">Correct</th>
          <th scope="col">Choice</th>
          <th scope="col">View</th>
        </tr>
      </thead>
    <tbody>
    `;

    var self = this;
    this.listQuestions.forEach(function (question, index) {
      let correctAnswers = self.getAnswer(question.answer_list[0].answers);
      let choiceAnswerText = self.getChoice(index);
      let choiceAnswers = choiceAnswerText.split("").sort();
      let isMarkToReview = self.getMarkToReview(index);
      let point = 0;
      if (correctAnswers.toString() == choiceAnswers.toString()) {
        point = 1;
      }

      let pointText = "";
      if(choiceAnswerText != "") {
        if(point == 1) {
          pointText = `<span class="badge badge-pill bg-success">Correct</span>`;
        } else {
          pointText = `<span class="badge badge-pill bg-danger">InCorrect</span>`;
        }
      } else {
        pointText = "-";
      }

      resultBlock += `
      <tr>
        <td>${index + 1}</td>
        <td>${question.question_text.substring(0, 70)}...</td>
        <td>${pointText}</td>
        <td>${correctAnswers.toString()}</td>
        <td>${
          choiceAnswerText != "" ? choiceAnswers.toString() : "-"
        }</td>
        <td>
          <a class="btn btn-sm btnViewQue ${isMarkToReview ? "mark" : ""}" data-queno="${index}" href="javascript:void(0)">View</a>
        </td>
      </tr>
      `;

      total_point += point;
    });

    resultBlock += `
      </tbody>
    </table>
    `;

    let percentPoint = Math.round((total_point / self.count) * 1000) / 10;
    let pointBlock = "";
    if (percentPoint >= 75) {
      pointBlock = `<h2 class="pointBlock text-center pass">${total_point}/${self.count} (${percentPoint})</h2>`;
    } else {
      pointBlock = `<h2 class="pointBlock text-center not-pass">${total_point}/${self.count} (${percentPoint}%)</h2>`;
    }

    resultBlock = `${pointBlock} ${resultBlock}`;
    $("#resultBlock").html(resultBlock);
  }

  getAnswer(queAnswers) {
    let SYMBOL_ANSWERS = ["A", "B", "C", "D", "E", "F", "G", "H"];
    var correctAnswer = [];
    queAnswers.forEach(function (answer, index) {
      if (answer.correct) {
        correctAnswer = [...correctAnswer, SYMBOL_ANSWERS[index]];
      }
    });

    return correctAnswer;
  }

  saveToLocalCache() {
    // console.log("Save to LocalCache");
    let exam = JSON.stringify({
      choices: this.choices,
      markedQuestion: this.markedQuestion,
      comments: this.comments
    });

    localStorage.setItem(this.cacheItemId, exam);
  }

  loadFromLocalCache() {
    let exam = localStorage.getItem(this.cacheItemId);
    if(!exam) return;
    
    exam = JSON.parse(exam);

    this.choices = exam.choices;
    this.markedQuestion = exam.markedQuestion;
    this.comments = exam.comments ?? [];
  }

  clearLocalCache() {
    localStorage.removeItem(this.cacheItemId, exam);
  }

  loadQueListNumber() {
    let self = this;
    self.choices.forEach(function (choiceItem) {
      $(`#attempts-que li[data-queno="${choiceItem.queNo}"]`).addClass("choice");
    });
    self.markedQuestion.forEach(function (markedItem) {
      $(`#attempts-que li[data-queno="${markedItem.queNo}"]`).addClass("review");
    });
  }

  renderQuestion(markedQue, index) {
    var SYMBOL_ANSWERS = ["A", "B", "C", "D", "E", "F", "G", "H"];
    let question = this.listQuestions[markedQue["queNo"]];

    let queAnswers = question["answer_list"][0]["answers"];
    let answer_text = "";
    
    let htmlRadioCheckbox = "";
    if (!question["is_partially_correct"]) {
      // One Choice: radio input
      htmlRadioCheckbox = `<input class="ip-radio" type="radio" name="que-${markedQue['queNo']}" value="${SYMBOL_ANSWERS[index]}">`;
    } else {
      // Multiple Choices: checkbox input
      htmlRadioCheckbox = `<input class="ip-radio" type="checkbox" name="que-${markedQue['queNo']}" value="${SYMBOL_ANSWERS[index]}">`;
    }

    let htmlStarIcon = `
      <div data-queno="${markedQue['queNo']}" class="starMarkToReview ${markedQue['isMarked'] ? 'true' : 'false'}">
          <i class="fa-solid fa-star"></i>
      </div>
    `;

    queAnswers.forEach(function (answer, index) {
      answer_text +=`
      <label class="my-2 custom_label">
        ${htmlRadioCheckbox}
        <span class="que-content hiddenColor ${answer["correct"] == true ? 'true' : 'false'}">
            <span class="symbolAnswer">${SYMBOL_ANSWERS[index]}.</span>
            ${answer["choice"]}
        </span>
      </label>
      `;
    });
    
    let html_starBlock = `
    <div class="starQuestionBlock">
      ${htmlStarIcon}
      Question: ${markedQue["queNo"] + 1}.
      ${question.question_text}
      ${answer_text}
    </div>
    <br>
    `;

    return html_starBlock;
  }

  renderContent(listQuestion) {
    var self = this;
    var htmlText = "";
    listQuestion.forEach(function (markedQue, index) {
      htmlText += self.renderQuestion(markedQue, index);
    });

    $("#starBlock").html(htmlText);
  }

  filterQuestion(options) {
    let self = this;
    let list = [];
    let EXAM_TYPE = options.exam_type;
    let MAX_QUESTION = options.max_question;
    let FROM_QUESTION = options.from_question;
    let TO_QUESTION = options.to_question;
    
    if(EXAM_TYPE == "STAR") {
      list = self.markedQuestion.filter(item => item["isMarked"]);
      // list.sort((a, b) => a.queNo - b.queNo);
      list.sort((b, a) => a.queNo - b.queNo);
      list = list.splice(0, MAX_QUESTION);
      list.sort((a, b) => a.queNo - b.queNo);
    } else if (EXAM_TYPE == "NEVER_ANSWERS") {
      let quesChoice = self.choices.map(obj => obj.queNo);
      for (let i = 0; i < self.listQuestions.length; i++) {
        if (!quesChoice.includes(i)) {
          list = [...list, {queNo: i, isMarked: false}]
        }
      }
      list = list.splice(0, MAX_QUESTION);
    } else if (EXAM_TYPE == "RETEST") {
      let from = FROM_QUESTION < 1 ? 1 : FROM_QUESTION;
      let to = (self.count < TO_QUESTION) ? self.count : (TO_QUESTION)
      for (let i = from; i <= to; i++) {
          list = [...list, {queNo: (i - 1), isMarked: false}]
      }
    }

    // Set Mark if have
    for (let i = 0; i < self.markedQuestion.length; i++) {
      let elementIndex = list.findIndex((obj) => obj.queNo == self.markedQuestion[i].queNo);
      if (elementIndex == -1) {
      } else {
        list[elementIndex].isMarked = self.markedQuestion[i].isMarked;
      }
    }

    return list;
  }

  getFilterQuestion(type = "STAR", max = 100, from = 0, to = 100) {
    //FILTER OPTIONS
    let listQuestion = this.filterQuestion({
      "exam_type": type,
      "max_question": max,
      "from_question": from,
      "to_question": to
    });
    this.renderContent(listQuestion);

    return listQuestion;
  }

  export() {
    let listQuestion = this.listQuestions;
    let html = `
      <div id="exportModal" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-lg">
          <div class="modal-content m-3 p-3">
            <h5>
              Content
              <a id="btnCopyExportContent" style="width: 100px" class="btn btn-warning btn-sm">Copy</a>
            </h5>
            <div id="exportContent" style="max-height: 350px; overflow: scroll;">
              <code><pre>${JSON.stringify(listQuestion, null, 2)}</pre></code>
            </div>
          </div>
        </div>
      </div>
    `;

    $("#modals").html(html);
    $('#exportModal').modal('show');
  }

  copyText(eleIndex="#exportContent pre") {
    let copyText = JSON.stringify(this.listQuestions, null, 2);
    navigator.clipboard.writeText(copyText);
  }

  getComment(queNo = this.current) {
    let elementIndex = this.comments.findIndex((obj) => obj.queNo == queNo);
    if (elementIndex == -1) {
      return "";
    } else {
      return this.comments[elementIndex].content;
    }
  }
  
  setComment(queNo, content) {
    let elementIndex = this.comments.findIndex((obj) => obj.queNo == queNo);
    let newElement = {
      queNo: queNo,
      content: content,
    };
    if (elementIndex == -1) {
      this.comments = [...this.comments, newElement];
    } else {
      this.comments[elementIndex] = newElement;
    }

    return "Success"
  }
}
