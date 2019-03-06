$(document).ready(function() {

    var kittenNumber = 0;
    var userCounter = 0;
    var imageValues = [1, 3, 6, 9];
    var wins = 0;
    var losses = 0;

// computer needs to pick a random number then puth it on the screen
// computer needs to randomly attach one of the numbers to an image
// as the user clicks a key add it to the counter
// compare the counter to the crystalNumber to see if they equal
    // if they equal then add wins and restart game
    // if not then have user pick another crystal
    // if the counter is more than the crystalNumber then add a loss and restart game

    kittenNumber = Math.floor(Math.random() * 50);

    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    function reset(){
        kittenNumber = Math.floor(Math.random() * 40 + 10);
        userCounter = 0;
        shuffle(imageValues);
    }

    function update(){
        $("#count").text(userCounter);
        $("#wins").text(wins);
        $("#losses").text(losses);
        $("#kittenNumber").text(kittenNumber);
    }

    function generateOnClickFunction(indexNumber){
        return function(){
            var value = imageValues[indexNumber];
            userCounter+= value;
            console.log(indexNumber);
            if (userCounter === kittenNumber){
                alert("You Win!!!");
                wins++;
                reset();
            } else if (userCounter > kittenNumber){
                alert("You Lose!");
                losses++;
                reset();
            }
            update();
        }
    }
    
    for (var i = 0; i < imageValues.length; i++){
        var id = "#kitten" + (i + 1);
        var image = $(id);
        var currentIndex = parseInt(i+"");
        image.on("click", generateOnClickFunction(currentIndex));
    }

    reset();
    update();

});