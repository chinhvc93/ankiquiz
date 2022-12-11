// INIT, GLOBAL VARIABLES
var examId, exam, queDataCount, que;
var SCREEN_MODE = "dark-mode";

function init() {
  loadDarkMode();
  examId = getExamId();
  switchDesk(examId);
}
init();

// LOAD QUESTION
$("#attempts-que").on("click", "ul > li", function () {
  exam.current = $(this).data("queno");
  let question = exam.currentQuestion();
  question.getQuestion(
    exam.getChoice(),
    exam.getMarkToReview()
  );
  $(".explanation-block").html("");
});

// SHOW FEEDBACK
$(".btn-showAnswer").on("click", function () {
  let isShowAnswer = false;
  if ($(".btn-showAnswer").hasClass("show")) {
    isShowAnswer = false;
    $(".btn-showAnswer").removeClass("show");
    $(".btn-showAnswer").text("Show Answer");
  } else {
    isShowAnswer = true;
    $(".btn-showAnswer").addClass("show");
    $(".btn-showAnswer").text("Hide Answer");
  }

  let question = exam.currentQuestion();
  question.showQueAnswerHtml(exam.getChoice(), isShowAnswer);
  question.showCommentHtml(exam.getComment(), isShowAnswer);
});

// EDIT QUESION
$(".btn-editQuestion").on("click", function () {
  console.log("btn editques");
});

// SHOW DISSUSTION
$(".btn-showDiscussion").on("click", function () {
  let isShowDiscussion = false;
  let discusstion = exam.currentQuestion()["discusstion"];
  let discusstion_count = discusstion ? discusstion.length : 0;
  if ($(".btn-showDiscussion").hasClass("show")) {
    isShowDiscussion = false;
    $(".btn-showDiscussion").removeClass("show");
    $(".discussion-container").addClass("d-none");
    $(".btn-showDiscussion").text(`Show Discussion (${discusstion_count})`);
  } else {
    isShowDiscussion = true;
    $(".btn-showDiscussion").addClass("show");
    $(".discussion-container").removeClass("d-none");
    $(".btn-showDiscussion").text(`Hide Discussion (${discusstion_count})`);
  }
  
  if(discusstion) {
    let html_discusstion = "";
    //Sort by voted count
    discusstion.sort((a, b) => b.upvote_count - a.upvote_count);
    
    discusstion.forEach(function (comment, index) {
      let selected_answers = comment.selected_answers;
      let html_selected_answers = "";
      if(selected_answers !== undefined && selected_answers != "") {
        html_selected_answers = `<span class="comment-selected-answers">${comment.selected_answers}</span>`;
      }
      html_discusstion += `
        <li id="comment-${comment.id}" class="comment-container" data-comment-id="${comment.id}">
          <div class="pb-1">
            <span class="fw-bold">#${index + 1}</span> 
            ${html_selected_answers}
            (<span class="comment-voted">${comment.upvote_count}</span> Voted)
          </div>
          <div class="comment-content">${comment.content}</div>
          <div class="pt-1"><span class="comment-username">${comment.username}</span> (<span class="comment-date">${comment.date}</span>)</div>
        </li>
      `;
    });
    html_discusstion = `
      <div class="p-1 mb-1 bg-info text-black">Discussion</div>
      <ul class="comment-list">
        ${html_discusstion}
      </ul>
    `;
    $(".discussion-container").html(html_discusstion);
  } else {
    $(".discussion-container").html("Have not comments!");
  }
});

// NEXT QUESTION
$(".btnNextQue").on("click", function () {
  exam.nextQuestion();
  let question = exam.currentQuestion();
  question.getQuestion(
    exam.getChoice(),
    exam.getMarkToReview()
  );
});

// PREVIOUS QUESTION
$(".btnPrevQue").on("click", function () {
  exam.prevQuestion();
  let question = exam.currentQuestion();
  question.getQuestion(
    exam.getChoice(),
    exam.getMarkToReview()
  );
});

// USERS CHOICE
$("#ques-list").on("click", ".ip-radio", function () {
  let aws = "";
  $("#ques-list .ip-radio:checked").each(function () {
    aws += $(this).val();
  });

  exam.saveChoice(exam.current, aws);
  if (aws != "") {
    que.markChoice(exam.current, true);
  } else {
    que.markChoice(exam.current, false);
  }
});

// MARK TO REVIEW
$("#starMarkToReview").on("click", function () {
  let isMarked = $("#starMarkToReview").hasClass("true");
  exam.saveMarkToReview(exam.current, !isMarked);
  que.markToReview(exam.current, !isMarked);
  que.showMarkToReview(!isMarked);
});

// REVIEW RESULT
$(".btn-review").on("click", function () {
  $(".ExamQuestionsBlock").addClass("d-none");
  $(".resultBlock").removeClass("d-none");
  exam.showResult();
});

// GO TO QUESTION IN REVIEW RESULT SCREEN
$("#resultBlock").on("click", ".btnViewQue", function () {
  exam.current = $(this).data("queno");
  let question = exam.currentQuestion();
  question.getQuestion(
    exam.getChoice(),
    exam.getMarkToReview()
  );
  $(".btn-return").click();
});

$(".btn-return").on("click", function () {
  $(".ExamQuestionsBlock").removeClass("d-none");
  $(".settingBlock").removeClass("d-none");
  $(".examBlock").removeClass("d-none");
  $(".examBlock").removeClass("d-none");
  $(".resultBlock").addClass("d-none");
  $(".starBlock").addClass("d-none");
  $(".testBlock").addClass("d-none");
  $(".testContent ").html("No Contents");
  $(".btnShowAnswer").addClass("d-none");
});

//SAVE QUIZ TO CACHE
$(".btn-saveQuiz").on("click", function () {
  exam.saveToLocalCache();
  $(".notification").text("Save to local successfully!!");
  $(".notification").removeClass("dange").addClass("success");
});

//CLEAR CACHE
$(".btn-clearQuiz").on("click", function () {
  exam.clearLocalCache();
  $(".notification").text("Clear local storage successfully!!");
  $(".notification").removeClass("success").addClass("danger");
});

//CHOICE DESK
$("#deskList .deskItem").on("click", function () {
  switchDesk($(this).data("examid"));
});

function switchDesk(examId) {
  let examIndex = listExam.findIndex((exam) => exam.id == examId);
  if(examIndex < 0) {
    examIndex = 0;
    examId = listExam[examIndex].id
  }
  //Set dropdown status
  $("#deskList .deskItem").removeClass("active");
  $(`#deskList .deskItem[data-examid="${examId}"]`).addClass("active");
  $("#selectExam").text(listExam[examIndex].name);

  //Set URL
  setSearchParam("exam", examId);

  exam = new Exam(listExam[examIndex].data, `cache${listExam[examIndex].id}`);
  queDataCount = exam.count;

  que = new Question();
  que.showQueNumber(exam.current);
  que.showQueListNumber(exam.count);

  //Load from local cache
  exam.loadFromLocalCache();
  exam.loadQueListNumber();

  //Show first question
  let firstQuestion = exam.listQuestions[0];
  firstQuestion.getQuestion(
    exam.getChoice(),
    exam.getMarkToReview()
  );
}

// CREATE TEST
$(".btn-createTest").on("click", function () {
  $(".ExamQuestionsBlock").addClass("d-none");
  $(".examBlock").addClass("d-none");
  $(".settingBlock").addClass("d-none");
  $(".testBlock").removeClass("d-none");
});

$("#testBlock").on("click", ".btnCreateTest", function () {
  let type = $("#filterOptionType2").val();
  let max = $("#filterOptionMaxQuestion2").val();
  let from = $("#filterOptionFromQuestion2").val();
  let to = $("#filterOptionToQuestion2").val();
  let random = $("#filterOptionRandom").val();
  
  exam.childExamChoice = [];
  let listQuestion = exam.getFilterQuestion(type, from, to, random, max);
  exam.renderContent(listQuestion, "#testBlock .testContent", false);
  $(".btnShowAnswer").removeClass("d-none");
});

// MARK STAR
$("#testBlock").on("click", ".starMarkToReview", function () {
  let queNo = $(this).data("queno");
  let isMarked = $(`#testBlock .starMarkToReview[data-queno="${queNo}"]`).hasClass("true");
  
  exam.saveMarkToReview(queNo, !isMarked);
  que.markToReview(queNo, !isMarked);
  if(isMarked) {
    $(`#testBlock .starMarkToReview[data-queno="${queNo}"]`).removeClass("true").addClass("false");
  } else {
    $(`#testBlock .starMarkToReview[data-queno="${queNo}"]`).removeClass("false").addClass("true");
  }
});

// SHOW ANSWER
$("#testBlock").on("click", ".btnShowAnswer", function () {
  let userChoice = $("#test_form").serializeArray()
  let listQuestion = exam.childExam;
  exam.setUserChoice(userChoice);
  exam.renderContent(listQuestion, "#testBlock .testContent", true);
});

//EXPORT
$(".btn-exportQuiz").on("click", function () {
  exam.export();
});

$("#modals").on("click", "#btnCopyExportContent", function () {
  exam.copyText("exportContent");
  $("#modals #btnCopyExportContent").text("Copied")
});

//EDIT COMMENT
$(".comment-block").on("click", ".btnEditComment", function () {
  if($(this).hasClass("nextCancelWhenClick")) {
    // Cancel when click 2 times
    $(this).removeClass("nextCancelWhenClick");
    $(".comment-block .textComment").show();
    $(".edit-comment-block").html("");
    return "Cancel";
  } else {
    $(this).addClass("nextCancelWhenClick");
  }
  
  let content = exam.getComment(exam.current);
  let htmlEditComment = `
    <textarea class="txtContent form-control" aria-label="Enter comment" rows="5">${content}</textarea>
    <a class="btnSave btn btn-sm btn-success mt-1">Save</a>
  `;

  $(".comment-block .textComment").hide();
  $(".edit-comment-block").html(htmlEditComment);
});

$(".comment-block").on("click", ".btnSave", function () {
  let content = $(".comment-block .txtContent").val();
  exam.setComment(exam.current, content);

  $(".edit-comment-block").html("");
  que.showCommentHtml(content, true);
  $(".comment-block .textComment").show();
});

// DARK MODE
function toogleDarkMode() {
  let cacheScreenMode = localStorage.getItem("DarkMode");
  if (cacheScreenMode) {
    SCREEN_MODE = cacheScreenMode;
  }

  if(SCREEN_MODE == "dark-mode") {
    SCREEN_MODE = "white-mode";
    $("body").addClass(SCREEN_MODE);
    $("body").removeClass("dark-mode");
  } else {
    SCREEN_MODE = "dark-mode";
    $("body").addClass(SCREEN_MODE);
    $("body").removeClass("white-mode");
  }

  localStorage.setItem("DarkMode", SCREEN_MODE);

  return SCREEN_MODE;
}

function loadDarkMode() {
  let cacheScreenMode = localStorage.getItem("DarkMode");
  if (cacheScreenMode) {
    SCREEN_MODE = cacheScreenMode;
  }

  if(SCREEN_MODE == "dark-mode") {
    $("body").addClass(SCREEN_MODE);
    $("body").removeClass("white-mode");
  } else {
    $("body").addClass(SCREEN_MODE);
    $("body").removeClass("dark-mode");
  }

  return "Load Dark Mode Successfull"
}

$(".btnToogleDarkMode").on("click", function () {
  toogleDarkMode();
});
