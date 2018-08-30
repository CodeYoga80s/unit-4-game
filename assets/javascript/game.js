$( document ).ready(function() {

//random number generator//
var randNumber = function(min, max){
    return Math.floor(Math.random() * (max-min+1)) + min;
}

var blueVal = randNumber(1, 12);
var greenVal = randNumber(1, 12);
var redVal = randNumber(1, 12);
var yellowVal = randNumber(1, 12);
var compScore = randNumber(19, 120);
var score = 0;
var wins = 0;
var losses = 0;
$("#randomNumber").text(compScore);
$("#numberWins").text(wins);
$("#numberLosses").text(losses);


    var blue = $("#blue1").on("click", function() {
        // console.log(blueVal);
        funFunction(blueVal);
    })

    
    var green = $("#green1").on("click", function() {
        // console.log(greenVal);
        funFunction(greenVal);
    })

    var red = $("#red1").on("click", function() {
        // console.log(redVal);
        funFunction(redVal);
    })

    var yellow = $("#yellow1").on("click", function() {
        // console.log(yellowVal);
        funFunction(yellowVal);
    })


function reset() {
    compScore = randNumber(19, 120);
    blueVal = randNumber(1, 12);
    greenVal = randNumber(1, 12);
    redVal = randNumber(1, 12);
    yellowVal = randNumber(1, 12);
    score = 0;
    $("#finalTotal").text(score);
    $("#randomNumber").text(compScore);


}

function youWin(){
    alert("You Win!");
    wins++;
    $("#numberWins").text(wins);
    reset();
}

function youLose(){
    alert("You Lose!");
    losses++;
    $("#numberLosses").text(losses);
    reset();
}

function funFunction(gemValue){
// console.log(gemValue);
score = score + gemValue;
// console.log(score);
$("#finalTotal").text(score);
$("#randomNumber").text(compScore);
if (score===compScore){
    youWin();
};
if(score>compScore){
    youLose();
}

}



});