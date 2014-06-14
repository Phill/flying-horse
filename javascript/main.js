/*
 * Our Flying Horse
 *
 */

var pos = 100;
var dir = "down";
var collision = false;
var pressed = false;
var okKeydown = true;

// Start the magic
function init() {
  moveBackground(1);
  addPillars();
  moveForeground(300);
  moveHorseDown();
  collisionDetection();
  keyboard();
  horseSelector();
}

function gameOver() {
  $("#game-over").css("display", "block");
  $("#restart-game").css("display", "block");
}

function horseSelector() {
  $("#horse-selector img").on("click", function () { 
     console.log('selected ' + $("#horse").attr("src"));
     $("#horse").attr("src", $(this).attr("src"));
  });
}

function collisionDetection() {
  if (collision == true) return;
  //console.log("horse: " + horsePos + " pillar: " + $('#pillar-2').offset().left);

  $('.dont-touch').each(function(i, el) {
    pillarLeft = $(el).offset().left;
    pillarTop = $(el).offset().top;
    if (pillarLeft >= 200 && pillarLeft <= 300 && pillarTop <= (pos + 100)) {
      console.log("collision!!!! " + $(el).attr('id'));
      collision = true;
      $("#horse").css("display", "none");
      gameOver();
    }
  });

  setTimeout('collisionDetection()', 100);
}

function timeOut() {
  pressed = false;
  okKeydown = false;
  dir = "down";
  console.log("timeout");
}

function keyboard() {
  $("body").keydown(function(e) {
    keyCode = parseInt(e.keyCode);
    if (keyCode == 32) {
      dir = "up";
      if (pressed == false) {
        pressed = true;
        timeOutFunction = setTimeout('timeOut()', 1000);
        console.log("Set going up timeout");
      }
      if (pressed == true && okKeydown == true) {
        moveHorseUp(pos);
        console.log("going up");
      } else {
        dir = "down";
        moveHorseDown(pos);
        console.log("going down");
      }
    }
  });

  $("body").keyup(function(e) {
    keyCode = parseInt(e.keyCode);
    if (keyCode == 32) {
      dir = "down";
      okKeydown = true;
      pressed = false;
      clearTimeout(timeOutFunction);
      moveHorseDown(pos);
    }
  });
}

// Moves the background
function moveBackground(i) {
  if (collision == true) return;
  i -= 2;
  $('#background').css("background-position", i + "px top");
  setTimeout('moveBackground(' + i + ')', 100);
}

// Moves the foreground
function moveForeground(i) {
  if (collision == true) return;
  i -= 8;
  $('#foreground').css("left", i);
  setTimeout('moveForeground(' + i + ')', 100);
}

function addPillars() {
  pillar = 'images/pillar.png';
  numPillars = Math.floor((Math.random() * 15) + 8);

  for (n = 1; n <= numPillars; n++) {
    $('#foreground').append('<img class="dont-touch" id="pillar-' + n + '" src="' + pillar + '">');
    $('#pillar-' + n).css({
      display: "inline-block",
      marginTop: 200,
      marginLeft: Math.floor((Math.random() * 200) + 200)
    });
  }
}

function moveHorseUp() {
  if (collision == true) return;
  var speed = (Math.floor((pos / 400) * 100)) + 5;
  var top = 100;

  if (dir == "down") return;

  if (pos <= top) {
    return;
  }

  // Increment position
  pos -= speed;

  // Move horse to position
  $('#horse').css({
    top: pos
  });

  setTimeout('moveHorseUp(' + pos + ')', 100);
}

function moveHorseDown() {
  if (collision == true) return;
  var speed = (Math.floor((pos / 400) * 100)) + 5;
  var bottom = 420;

  if (dir == "up") return;

  if (pos >= bottom) {
    return;
  }

  // Increment position
  pos += speed;

  // Move horse to position
  $('#horse').css({
    top: pos
  });

  setTimeout('moveHorseDown(' + pos + ')', 100);
}

// Where all the magic starts
init();
