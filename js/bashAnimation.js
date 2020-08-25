var myDescription = "I am a student majoring in Information Management. My specialize of Programming Language is Python. I am currently learning HTML / CSS / JavaScript.";

var textArray = myDescription.split("");
var loopTimer;
var doneShowingText = false;
var setContent;


function frameLooper() {
    if (textArray.length > 0 && !doneShowingText) {
        $('#myTypingText')[0].innerHTML += textArray.shift();
    } else {
        clearTimeout(loopTimer);
        doneShowingText = true;
        // console.log("done");
    }
    loopTimer = setTimeout('frameLooper()', 35);
}


$(document).ready(function () {
    setContent = $('#content')[0].outerHTML = frameLooper();
});




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

$(document).ready(function () {
    setToday = $('#newTime')[0].outerHTML = "(" + getFormattedDate() + ")";

});
