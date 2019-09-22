$(document).ready(function(){

var wins = 0;
var losses = 0;
var score = 0;
var random;
startGame();

function startGame(){
//Random number in crystal one, two, three and four
var crystal1 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
var crystal2 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
var crystal3 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
var crystal4 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
reset();
initializeWins();
initializeLosses();
game();

// Function that resets the game
function reset(){
     startGame.crystal1 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
     startGame.crystal2 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
     startGame.crystal3 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
     startGame.crystal4 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
generateRandomNumber();
score = 0;
populateScore();
}

//Function to generate random number
function generateRandomNumber(){
random = Math.floor(Math.random() * (120 - 19 + 1) + 19);
// document.getElementById("random").innerHTML = random;
$("#random").text(random);
console.log("Random number: "+random);

}
function initializeWins(){
    // document.getElementById("wins").innerHTML = 0 ;
    $("#wins").text(0);
}


function initializeLosses(){
    // document.getElementById("losses").innerHTML = 0 ;
    $("#losses").text(0);
}

function game(){
$("#img1").on("click", function(){
    // var crystal1 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    console.log("Crystal 1: "+startGame.crystal1);
    score = score + startGame.crystal1;
    // score = score + $(this).val();
    console.log("Score 1: "+score);   
    populateScore();
});

$("#img2").on("click", function(){
    // var crystal2 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    console.log("Crystal 2: "+startGame.crystal2);
    score = score + startGame.crystal2;
    console.log("Score 2: "+score);
    populateScore();
});

$("#img3").on("click", function(){
    // var crystal3 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    console.log("Crystal 3: "+startGame.crystal3);
    score = score + startGame.crystal3;
    console.log("Score 3: "+score);
    populateScore();
});

$("#img4").on("click", function(){
    // var crystal4 = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    console.log("Crystal 4: "+startGame.crystal4);
    score = score + startGame.crystal4;
    console.log("Score 4: "+score);
    populateScore();
});
}

function populateScore(){
    // document.getElementById("score").innerHTML = score;
    $("#score").text(score);
    gameLogic();
}

function gameLogic(){
if(random == score){
    wins = wins + 1;
    populateWins();
    reset();
}
if(score > random){
    losses = losses + 1;
    populateLosses();
    reset();
}

function populateWins(){
    // wins = wins + 1;
    var youwin = ' ';
    // document.getElementById("youwin").innerHTML = youwin ;
    $("#youwin").text(youwin);
    populateLosses.youlose = ' ';
    // document.getElementById("youlose").innerHTML = populateLosses.youlose ;
    $("#youlose").text(populateLosses.youlose);
    // document.getElementById("wins").innerHTML = wins ;
    $("#wins").text(wins);
    youwin = "You Win !";
    // document.getElementById("youwin").innerHTML = youwin ;
    $("#youwin").text(youwin);
    // reset();
    
}

function populateLosses(){
    // losses = losses + 1;
    populateWins.youwin = ' ';
    // document.getElementById("youwin").innerHTML = populateWins.youwin;
    $("#youwin").text(populateWins.youwin);
    var youlose = ' ';
    // document.getElementById("youlose").innerHTML = youlose ;
    $("#youlose").text(youlose);
    // document.getElementById("losses").innerHTML = losses ;
    $("#losses").text(losses);
    youlose = "You Lost !"
    // document.getElementById("youlose").innerHTML = youlose ;
    $("#youlose").text(youlose);
    // reset();
}
}
// reset();
}
});
