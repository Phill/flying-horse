/*
 * Our Flying Horse
 *
 */

var pos = 100;
var dir = "down";

// Start the magic
function init() {
  moveBackground(1);
  addPillars();
  moveForeground(300);
  moveHorseDown();
  keyboard();
}

function keyboard() {
  $("body").keydown(function(e) {
    keyCode = parseInt(e.keyCode);
    if (keyCode == 32) {
      dir = "up";
      moveHorseUp(pos);
    }
  });

  $("body").keyup(function(e) {
    keyCode = parseInt(e.keyCode);
    if (keyCode == 32) {
      dir = "down";
      moveHorseDown(pos);
    }
  });
}

// Moves the background
function moveBackground(i) {
  i -= 2;
  $('#background').css("background-position", i + "px top");
  setTimeout('moveBackground(' + i + ')', 100);
}

// Moves the foreground
function moveForeground(i) {
  i -= 8;
  $('#foreground').css("left", i);
  setTimeout('moveForeground(' + i + ')', 100);
}

function addPillars() {
  pillar = 'images/pillar.png';
  numPillars = Math.floor((Math.random() * 15) + 8);

  for (n = 1; n <= numPillars; n++) {
    $('#foreground').append('<img id="pillar-' + n + '" src="' + pillar + '">');
    $('#pillar-' + n).css({
      display: "inline-block",
      marginTop: 200,
      marginLeft: Math.floor((Math.random() * 200) + 200)
    });
  }
}

function moveHorseUp() {
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
