$(function(){

    //load the news card
    $.get("/aktuelles.html", function(news){
        console.log(news);
        $("#news-content").html(news);
    });

});