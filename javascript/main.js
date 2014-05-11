/*
 * Our Flying Horse
 *
 */

// Start the magic
function init() {
  moveBackground(1);
  moveHorseUpDown(450);
}

// Moves the background
function moveBackground(i) {
  i -= 2;
  $('#game').css("background-position", i + "px top");
  setTimeout('moveBackground(' + i + ')', 100);
}

// Bounces the horse
function moveHorseUpDown(pos) {
  var speed  = (Math.floor((pos / 400) * 100)) + 5;
  var top    = 5;
  var bottom = 343;

  if ( pos <= top )    dir = 'down';
  if ( pos >= bottom ) dir = 'up';

  if ( dir == 'up' )   posInc = -(speed);
  if ( dir == 'down' ) posInc = speed;

  // Increment position
  pos += posInc;

  // Move horse to position
  $('#horse').css({ top:pos });

  setTimeout('moveHorseUpDown(' + pos + ')', 100);
}

// Where all the magic starts
init();

