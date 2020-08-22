var myDescription = "I am an MR. and a student majoring in Information Management. My specialize of Programming Language is Python. I am currently learning HTML/CSS/JavaScript. I am interested in Application of the IOT, The development of AI and Blockchain technology.";

var textArray = myDescription.split("");
var loopTimer;
var setToday;
var doneShowingText = false;

function frameLooper() {
    if (textArray.length > 0 && !doneShowingText) {
        $('#myTypingText')[0].innerHTML += textArray.shift();
    } else {
        clearTimeout(loopTimer);
        doneShowingText = true;
        // console.log("done");
    }
    loopTimer = setTimeout('frameLooper()', 15);
}

function getFormattedDate() {
    var date = new Date();

    var str = date.getFullYear() + "-" +
        (date.getMonth() + 1) + "-" +
        date.getDate() + " " +
        date.getHours() + ":" +
        date.getMinutes() + ":" +
        date.getSeconds();
    return str;
}


// Run the function when all the elements are loaded
$(document).ready(function () {
    setToday = $('#newTime')[0].outerHTML = "(" + getFormattedDate() + ")";

    frameLooper();

});