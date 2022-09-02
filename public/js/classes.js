class Question {
  constructor() {}

  getQuestion(queNo, queData, choiceAnswer, isMarked = false) {
    // Show Question Number
    this.showQueNumber(queNo);

    // Load Quesion
    this.loadQueTextHtml(queData.question_text, queData.topic_name, queData.question_id);

    // Load Answer
    this.loadQueAnswerHtml(
      queData.answer_list[0].answers,
      queData.is_partially_correct,
      false,
      choiceAnswer
    );

    //Mark Current Question
    this.markCurrentQuestion(queNo);

    // Load isMarked
    this.showMarkToReview(queNo, isMarked);

    // Clean
    $(".explanation-block").html("");
    $(".btn-showAnswer").removeClass("show");
    $(".btn-showAnswer").text("Show Answer");

    return "Load Question Successfully!";
  }

  loadQueTextHtml(queText, queDomain = "", queId = "") {
    $(".que-text").html(queText);
    $("#queDomain").text(`${queId} ${queDomain}`);
  }

  loadQueAnswerHtml(
    queAnswers,
    isPartiallyCorrect,
    isShowAnswer = false,
    choiceAwswer
  ) {
    var htmlText = "";
    var SYMBOL_ANSWERS = ["A", "B", "C", "D", "E", "F", "G", "H"];
    queAnswers.forEach(function (answer, index) {
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
      if (!isPartiallyCorrect) {
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

  markCurrentQuestion(queNo = 0) {
    $("#attempts-que li").removeClass("current");
    $(`#attempts-que li[data-queno="${queNo}"]`).addClass("current");
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
      queData.answer_list[0].answers,
      queData.is_partially_correct,
      isShowAnswer,
      choiceAnswer
    );
  }

  showMarkToReview(queNo = 0, isMarked) {
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

  nextQue(queNo) {
    queNo = queNo + 1;
    if (queNo >= queDataCount) {
      queNo = 0;
    }

    return queNo;
  }

  prevQue(queNo) {
    queNo = queNo - 1;
    if (queNo < 0) {
      queNo = queDataCount - 1;
    }

    return queNo;
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
  }

  currentQuestion() {
    return this.listQuestions[this.current];
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
    });

    localStorage.setItem(this.cacheItemId, exam);
  }

  loadFromLocalCache() {
    let exam = localStorage.getItem(this.cacheItemId);
    if(!exam) return;
    
    exam = JSON.parse(exam);
    // console.log(exam);

    this.choices = exam.choices;
    this.markedQuestion = exam.markedQuestion;
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
}
