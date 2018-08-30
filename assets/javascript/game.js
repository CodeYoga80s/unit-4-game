$( document ).ready(function() {

var blueVal = Math.floor((Math.random() * 12) + 1);
var greenVal = Math.floor((Math.random() * 12) + 1);
var redVal = Math.floor((Math.random() * 12) + 1);
var yellowVal = Math.floor((Math.random() * 12) + 1);
var compScore = Math.floor((Math.random() * 120) + 19);
var score = 0;
var wins = 0;
var losses = 0;
$("#randomNumber").text(compScore);
$("#numberWins").text(wins);
$("#numberLosses").text(losses);



    var blue = $("#blue1").on("click", function() {
        // scoreArray.push(blueVal);
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
    compScore = Math.floor((Math.random() * 120) + 19);
    blueVal = Math.floor((Math.random() * 12) + 1);
    greenVal = Math.floor((Math.random() * 12) + 1);
    redVal = Math.floor((Math.random() * 12) + 1);
    yellowVal = Math.floor((Math.random() * 12) + 1);
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