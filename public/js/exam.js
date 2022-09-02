// INIT
function init() {
  var examId = getExamId();
  let examIndex = listExam.findIndex((exam) => exam.id == examId);
  $("#selectExam").text(listExam[examIndex].name);
  return new Exam(listExam[examIndex].data, `cache${listExam[examIndex].id}`);
}

var exam = init();
var queDataCount = exam.count;

var que = new Question();
que.showQueNumber(exam.current);
que.showQueListNumber(exam.count);

//Load from local cache
exam.loadFromLocalCache();
exam.loadQueListNumber();

//Show first question
que.getQuestion(
  exam.current,
  exam.currentQuestion(),
  exam.getChoice(),
  exam.getMarkToReview()
);

// LOAD QUESTION
$(".attempts-que ul > li").on("click", function () {
  exam.current = $(this).data("queno");
  que.getQuestion(
    exam.current,
    exam.currentQuestion(),
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
  que.showQueAnswerHtml(exam.currentQuestion(), exam.getChoice(), isShowAnswer);
});

// NEXT QUESTION
$(".btnNextQue").on("click", function () {
  exam.current = que.nextQue(exam.current);
  que.getQuestion(
    exam.current,
    exam.currentQuestion(),
    exam.getChoice(),
    exam.getMarkToReview()
  );
});

// PREVIOUS QUESTION
$(".btnPrevQue").on("click", function () {
  exam.current = que.prevQue(exam.current);
  que.getQuestion(
    exam.current,
    exam.currentQuestion(),
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
  que.showMarkToReview(exam.current, !isMarked);
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
  que.getQuestion(
    exam.current,
    exam.currentQuestion(),
    exam.getChoice(),
    exam.getMarkToReview()
  );
  $(".btn-return").click();
});

$(".btn-return").on("click", function () {
  $(".ExamQuestionsBlock").removeClass("d-none");
  $(".resultBlock").addClass("d-none");
});

//SAVE QUIZ TO CACHE
$(".btn-saveQuiz").on("click", function () {
  exam.saveToLocalCache();
  console.log(11111);
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
  console.log(111);
});