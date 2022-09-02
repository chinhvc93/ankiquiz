// SHOW LIST EXAM
var examListHtml = "";
listExam.forEach(function (item) {
  examListHtml += `<li><a class="deskItem dropdown-item" href="/?exam=${item.id}">${item.name}</a></li>`
});

$("#deskList").html(examListHtml);

function getExamId(key = "exam") {
  let searchParams = new URLSearchParams(window.location.search);
  if (searchParams.has(key)) {
    let examId = searchParams.get(key);
    return examId;
  }
  return null;
}
