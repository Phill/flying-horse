/*
 * Our Flying Horse
 *
 */

// Start the magic
function init() {
  moveBackground(1);
  moveHorseUpDown(450, 1);
}

// Moves the background
function moveBackground(i) {
  i -= 5;
  $('#game').css("background-position", i + "px top");
  setTimeout('moveBackground(' + i + ')', 50);
}

// Bounces the horse
function moveHorseUpDown(pos, i) {
  var speed  = 50;
  var top    = 100;
  var bottom = 450;

  // Going up
  if ( pos <= top ) posInc = speed;

  // Going down
  if ( pos >= bottom ) posInc = -(speed);

  // Increment position
  pos += posInc;

  // Move horse to position
  $('#horse').css({ top:pos });

  setTimeout('moveHorseUpDown(' + pos + ',' + i + ')', 100);
}

// Where all the magic starts
init();

