// SHOW LIST EXAM
var examListHtml = "";
listExam.forEach(function (item) {
  examListHtml += `<li><a class="deskItem dropdown-item" href="javascript:void(0)" data-examId="${item.id}">${item.name}</a></li>`
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

var setSearchParam = function(key, value) {
  if (!window.history.pushState) {
      return;
  }

  if (!key) {
      return;
  }

  var url = new URL(window.location.href);
  var params = new window.URLSearchParams(window.location.search);
  if (value === undefined || value === null) {
      params.delete(key);
  } else {
      params.set(key, value);
  }

  url.search = params;
  url = url.toString();
  window.history.replaceState({url: url}, null, url);
}
