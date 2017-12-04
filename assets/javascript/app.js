$(document).ready(function(){

//declaring varaibles    
var correctAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;
var time = 60;    

//hiding questions and results until the game begins
$("#duringgame").hide();
$("#gameover").hide();

//press start button to begin game
$("#presstostart").on("click", function() {
    $("#startgame").hide();
    $("#duringgame").show();
    $("#gameover").hide();
    setInterval(userInterfaceCountdown, 100);
});

// countdown timer for 60 seconds once user starts the game
function userInterfaceCountdown() {
    // time--;
    $("#countitdown").html(time + " " + "Seconds");
    if(time > 0) {
        time--;
    } else {
        // clearInterval(userInterfaceCountdown);
        $("#duringgame").hide();
        $("#gameover").show();
        gameFinished();
    }
}

// when user presses done button resutls screen will appear
$("#completed").on("click", function() {
    $("#duringgame").hide();
    $("#gameover").show();
    gameFinished();
});

// check resutls and display to DOM
function gameFinished() {

    var q1 = $("input:radio[name=q1]:checked").val();
    var q2 = $("input:radio[name=q2]:checked").val();
    var q3 = $("input:radio[name=q3]:checked").val();
    var q4 = $("input:radio[name=q4]:checked").val();
    var q5 = $("input:radio[name=q5]:checked").val();
    var q6 = $("input:radio[name=q6]:checked").val();
    var q7 = $("input:radio[name=q7]:checked").val();
    var q8 = $("input:radio[name=q8]:checked").val();

    if(q1 === "astroturf") {
        correctAnswers++;
    }
    else if(!q1) {
        unanswered++;
    }
    else {
        wrongAnswers++;
    }

    if(q2 === "11") {
        correctAnswers++;
    }
    else if(!q2) {
        unanswered++;
    }
    else {
        wrongAnswers++;
    }

    if(q3 === "shootouts") {
        correctAnswers++;
    }
    else if(!q3) {
        unanswered++;
    }
    else {
        wrongAnswers++;
    }

    if(q4 === "4") {
        correctAnswers++;
    }
    else if(!q4) {
        unanswered++;
    }
    else {
        wrongAnswers++;
    }

    if(q5 === "0") {
        correctAnswers++;
    }
    else if(!q5) {
        unanswered++;
    }
    else {
        wrongAnswers++;
    }

    if(q6 === "70 minutes") {
        correctAnswers++;
    }
    else if(!q6) {
        unanswered++;
    }
    else {
        wrongAnswers++;
    }

    if(q7 === "fall") {
        correctAnswers++;
    }
    else if(!q7) {
        unanswered++;
    }
    else {
        wrongAnswers++;
    }

    if(q8 === "5") {
        correctAnswers++;
    }
    else if(!q8) {
        unanswered++;
    }
    else {
        wrongAnswers++;
    }

    $("#right").html(correctAnswers);
    $("#wrong").html(wrongAnswers);
    $("#timeexpired").html(unanswered);

    $("#gameover").show(); 
}



});
