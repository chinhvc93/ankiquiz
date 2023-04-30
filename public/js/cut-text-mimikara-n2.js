$("#btn-submit-json").on("click", function () {
    console.log("#btn-submit-json clicked");
    $("#csv-result").text("");
    var htmlRaw = $("#html-source").val();
    $("#tempHtml").html(htmlRaw);
    var boxtvs =  $("#tempHtml .boxtv");
    var list = [];
    boxtvs.each((index, boxtv) => {
        $("#tempHtmlComment").html(boxtv);
        $("#tempHtmlComment .vidubox").remove();


        let hanviet = $("#tempHtmlComment .boxtv > .hanviet").text() + $("#tempHtmlComment .boxtv > .hanviet1").text() + $("#tempHtmlComment .boxtv > .hanviet2").text();
        let nghia = $("#tempHtmlComment .boxtv > .nghia").text() + $("#tempHtmlComment .boxtv > .nghia1").text() + $("#tempHtmlComment .boxtv > .nghia2").text();
        let tuvung = $("#tempHtmlComment .boxtv > .tuvung ruby").text().split("（")[0];
        if(tuvung == "") tuvung = $("#tempHtmlComment .boxtv > .tuvung b").text();
        list = [...list, {
            "tuvung": tuvung.trim(),
            "cachdoc": $("#tempHtmlComment .boxtv > .tuvung ruby > rt").text(),
            "hanviet": hanviet.trim(),
            "nghia": nghia.trim(),
        }];
    });

    let result = "";
    list.forEach((words) => {
        console.log(words)
        result +=`${words.tuvung} (${words.cachdoc}) (${words.hanviet.toUpperCase()}): ${words.nghia}\n`;
    });
    $("#csv-result").html(result);
});
