$(document).ready(function () {

    var Random = Math.floor(Math.random() * 102 + 19);

    $('#numberToMatch').text(Random);

    var num1 = Math.floor(Math.random() * 12 + 1);
    var num2 = Math.floor(Math.random() * 12 + 1);
    var num3 = Math.floor(Math.random() * 12 + 1);
    var num4 = Math.floor(Math.random() * 12 + 1);

    var playerTotal = 0;
    var wins = 0;
    var losses = 0;

    $('#wins').text(wins);
    $('#losses').text(losses);

    function reset() {
        Random = Math.floor(Math.random() * 102 + 19);

        $('#numberToMatch').text(Random);

        num1 = Math.floor(Math.random() * 12 + 1);
        num2 = Math.floor(Math.random() * 12 + 1);
        num3 = Math.floor(Math.random() * 12 + 1);
        num4 = Math.floor(Math.random() * 12 + 1);
        playerTotal = 0;

        $('#totalScore').text(playerTotal);
    };

    function winner() {
        alert("You won!");
        wins++;
        $('#wins').text(wins);
        reset();
    };

    function loser() {
        alert("You didn't win. Try again!");
        losses++;
        $('#losses').text(losses);
        reset()
    };

    $('.yellow').on('click', function () {
        playerTotal = playerTotal + num3;
        $('#totalScore').text(playerTotal);

        if (playerTotal == Random) {
            winner();
        } else if (playerTotal > Random) {
            loser();
        }
    });

    $('.blue').on('click', function () {
        playerTotal = playerTotal + num2;
        $('#totalScore').text(playerTotal);
        if (playerTotal == Random) {
            winner();
        } else if (playerTotal > Random) {
            loser();
        }
    });

    $('.green').on('click', function () {
        playerTotal = playerTotal + num4;
        $('#totalScore').text(playerTotal);

        if (playerTotal == Random) {
            winner();
        } else if (playerTotal > Random) {
            loser();
        }
    });
    
    $('.red').on('click', function () {
        playerTotal = playerTotal + num1;
        $('#totalScore').text(playerTotal);
        if (playerTotal == Random) {
            winner();
        } else if (playerTotal > Random) {
            loser();
        }
    });
});