//base game variables
var Wins = 0;
var Losses = 0;
var addition = 0;
var computerscore = Math.floor((Math.random() * 100) + 19);

//variable for random value given to each gem
var pink = Math.floor((Math.random() * 12) + 1);
var silver = Math.floor((Math.random() * 12) + 1);
var green = Math.floor((Math.random() * 12) + 1);
var blue = Math.floor((Math.random() * 12) + 1);

//updates the scoreboard for game functionality and win/loss count
var updateAddition = function () {
    $('.addition').empty();
    $('.addition').append(addition);

    $('#Wins').empty();
    $('#Wins').append(Wins);

    $('#Losses').empty();
    $('#Losses').append(Losses);
}

//new set of variables for a fresh game. random computer score, adds random values to crystals
var restart = function () {
    addition = 0;
    computerscore = Math.floor((Math.random() * 100) + 19);

    $('.computerscore').empty();
    $('.computerscore').append(computerscore);

    var pink = Math.floor((Math.random() * 12) + 1);
    var silver = Math.floor((Math.random() * 12) + 1);
    var green = Math.floor((Math.random() * 12) + 1);
    var blue = Math.floor((Math.random() * 12) + 1);
    updateAddition();
}

//game engine, adds to values and makes the game function
var game = function () {
    if (addition == computerscore) {
        Wins = Wins + 1;
        alert("You win!");
        restart();
    } else if (addition > computerscore) {
        Losses = Losses + 1;
        alert("You lost");
        restart();
    } else {
        updateAddition();
    }
}
//updates computer score on game restart
$('.computerscore').append(computerscore);
$('.addition').append(addition);

//functions to add to player score based on crystal clicked
$(document).ready(function () {
    $('#pink').click(function () {
        addition = addition + pink;
        game();
    })

    $('#silver').click(function () {
        addition = addition + silver;
        game();
    })
    $('#green').click(function () {
        addition = addition + green;
        game();
    })

    $('#blue').click(function () {
        addition = addition + blue;
        game();
    })
});