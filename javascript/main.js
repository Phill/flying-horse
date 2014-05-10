var startPosBackground = 1;
var startPosHorse      = 490;

function init() {
  $('#game #horse').css({
    top: 490,
    left: 200
  });
}

function moveBackground(i) {
  i -= 5;
  $('#game').css("background-position", i + "px top");
  setTimeout('moveBackground(' + i + ')', 50);
}

function moveHorseUpDown(pos, i) {
  var speed  = 50 + (((250 / 490) * 100) / 5);

  var top    = 100;
  var bottom = 450;

  // up
  if ( pos <= top ) posInc = speed;

  // down
  if ( pos >= bottom ) posInc = -(speed);

  pos += posInc;

  $('#horse').css({top:pos});

  // if ( i < 1000 ) {
  //   i += 1;
    setTimeout('moveHorseUpDown(' + pos + ',' + i + ')', 100);
  // }
}

function startGame(x, y) {
  moveBackground(x);
  moveHorseUpDown(y, 1);
}

init();
startGame(startPosBackground, startPosHorse);
