var title=document.querySelector("#Titolo");
var cont=1;
var array=[];
var gamestarted=false;
var round=true;
var clicks=[];
function arraysAreEqual(arr1, arr2) {
  console.log(arr1);
  console.log(arr2);
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
}
function gameOver(){
    title.textContent="Game Over, Press Any Key to Restart";
    document.querySelector("body").classList.add("gameOver");
    var audio=new Audio("sounds/wrong.mp3");
    audio.play();
    setTimeout(function(){
        document.querySelector("body").classList.remove("gameOver");
    },500);
    cont=1;
    array=[];
    document.addEventListener("keypress",start_game);
}
for (var j = 1; j < 5; j++) {
  (function (currentJ) {
      document.querySelector(".cerchio_" + currentJ).addEventListener("click", function () {
          switch (currentJ) {
              case 1:
                  new Audio("sounds/red.mp3").play();
                  break;
              case 2:
                  new Audio("sounds/yellow.mp3").play();
                  break;
              case 3:
                  new Audio("sounds/blue.mp3").play();
                  break;
              case 4:
                  new Audio("sounds/green.mp3").play();
                  break;
          }
          if (gamestarted === false) {
              gameOver();
          } else {
              clicks.push(parseInt(this.classList[0].split('_')[1]));
              if (arraysAreEqual(clicks, array) === true) {
                  if (array.length === clicks.length) {
                      cont++;
                      start_game();
                      clicks = [];
                  }
              } else {
                  gameOver();
                  clicks = [];
              }
          }
      });
  })(j);
}
function start_game(){
gamestarted=true;
title.textContent="level "+cont;
array.push(Math.floor(Math.random()*4)+1);
var cerchio = document.querySelector(".cerchio_" + array[array.length-1]);
cerchio.classList.add("pressed");
setTimeout(function () {
 cerchio.classList.remove("pressed");
  }, 500);
  }
document.addEventListener("keypress",start_game);