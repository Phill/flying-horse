/*
 * Our Flying Horse
 *
 */

var pos = 100;
var dir = "down";

// Start the magic
function init() {
  moveBackground(1);
// moveHorseUp(450);
  moveHorseDown();
  keyboard(); 
}

function keyboard(){
  $("body").keydown(function (e){
    keyCode = parseInt(e.keyCode);
    if (keyCode == 32) { 
      dir = "up";
console.log("up");
      moveHorseUp(pos); 
    }
  });

  $("body").keyup(function (e){
    keyCode = parseInt(e.keyCode);
    if (keyCode == 32) { 
      dir = "down";  
console.log("down");
    moveHorseDown(pos); 
    }
  });
}

function moveHorseUp() {
  var speed  = (Math.floor((pos / 400) * 100)) + 5;
  var top = 50;
 if (dir == "down") return;
  if (pos <= top){
    return ;
  } 

   // Increment position
  pos -= speed;

  // Move horse to position
  $('#horse').css({ top:pos });

  setTimeout('moveHorseUp(' + pos + ')', 100);
}

// Moves the background
function moveBackground(i) {
  i -= 2;
  $('#game').css("background-position", i + "px top");
  setTimeout('moveBackground(' + i + ')', 100);
}

// Bounces the horse
function moveHorseDown() {
  var speed  = (Math.floor((pos / 400) * 100)) + 5;
  var bottom = 343;
  if (dir == "up") return;
  if (pos >= bottom){
    return ;
  } 

   // Increment position
  pos += speed;

  // Move horse to position
  $('#horse').css({ top:pos });

  setTimeout('moveHorseDown(' + pos + ')', 100);
}

// Where all the magic starts
init();

