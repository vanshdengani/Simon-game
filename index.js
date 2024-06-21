

// var buttonColours = ["red", "blue", "green", "yellow"];

// var gamePattern = [];
// var userClickedPattern = [];

// $(".btn").click(function() {

//   var userChosenColour = $(this).attr("id");
//   userClickedPattern.push(userChosenColour);

//   //1. In the same way we played sound in nextSequence() , when a user clicks on a button, the corresponding sound should be played.
//   playSound(userChosenColour);

// });

// function nextSequence() {

//   var randomNumber = Math.floor(Math.random() * 4);
//   var randomChosenColour = buttonColours[randomNumber];
//   gamePattern.push(randomChosenColour);

//   $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

//   //4. Refactor the code in playSound() so that it will work for both playing sound in nextSequence() and when the user clicks a button.
//   playSound(randomChosenColour);
// }

// //2. Create a new function called playSound() that takes a single input parameter called name.
// function playSound(name) {

//   //3. Take the code we used to play sound in the nextSequence() function and add it to playSound().
//   var audio = new Audio("sounds/" + name + ".mp3");
//   audio.play();
// }

// function playsound(){
//   var audio = new Audio('sounds/green.mp3');
//   audio.play();
//   }
  
// // playsound();
 

// var random = Math.random()*4;
// random= Math.floor(random)+1;
// playsound(random);

// function playsound(random){
// switch("random"){
//         case "1" :
//             var audio = new Audio('sounds/green.mp3');
//             audio.play();
//             break;

//         case "2" :
//             var audio = new Audio('sounds/red.mp3');
//             audio.play();
//             break;
    

//         case "3" :
//             var audio = new Audio('sounds/yellow.mp3');
//             audio.play();
//             break;


//         case "4" :
//             var audio = new Audio('sounds/blue.mp3');
//             audio.play();
//             break;

// }
// }


var buttonColours=["red","blue","green","yellow"];
var gamePattern= [];
var userClickedPattern= [];
var level=0;
var started=0;

$(document).keypress(function(){
 if(started===0){
  
  $("h1").text("Level "+level);
  nextSequence();
  started=1;
 }
});

$(".btn").click(function(){
  $(this).fadeIn(100).fadeOut(100).fadeIn(100)
 var userChosenColour= $(this).attr("id");
 userClickedPattern.push(userChosenColour);
 playSound(userChosenColour);
 animatePress(userChosenColour);
 checkAnswer(userClickedPattern.length-1);
});



function checkAnswer(currentLevel) {

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    console.log("success");

    if (userClickedPattern.length === gamePattern.length){
      setTimeout(function () {
        nextSequence();
      }, 1000);
      
    }

  } else {

    console.log("wrong");
    
    //1. In the sounds folder, there is a sound called wrong.mp3, play this sound if the user got one of the answers wrong.
    playSound("wrong");

    //2. In the styles.css file, there is a class called "game-over", apply this class to the body of the website when the user gets one of the answers wrong and then remove it after 200 milliseconds.
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    //3. Change the h1 title to say "Game Over, Press Any Key to Restart" if the user got the answer wrong.
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
  }

}

function startOver(){
  gamePattern= [];

 level=0;
started=0;
}

function playSound(name) {

    //3. Take the code we used to play sound in the nextSequence() function and add it to playSound().
    var audio = new Audio(name + ".mp3");
    audio.play();
  }

function animatePress(currentColour){
 $("#" +currentColour).addClass("pressed");


 setTimeout(function(){
  $("#" +currentColour).removeClass("pressed");},100);
}

function nextSequence(){
  userClickedPattern = [];
  level++;
  $("h1").text("Level " + level);
  var randomNumber= Math.floor(Math.random()*4);
  var randomChosenColour=buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  playSound(randomChosenColour);
  animatePress(randomChosenColour);

}


