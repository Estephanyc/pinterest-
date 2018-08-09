var view = $("#tslshow");
var move = "100px";
var sliderLimit = -750

$("#rightArrow").click(function () {

    var currentPosition = parseInt(view.css("left"));
    if (currentPosition >= sliderLimit) view.stop(false, true).animate({ left: "-=" + move }, { duration: 400 })

});

$("#leftArrow").click(function () {

    var currentPosition = parseInt(view.css("left"));
    if (currentPosition < 0) view.stop(false, true).animate({ left: "+=" + move }, { duration: 400 })
});