var startPosBackground = 1;
var startPosHorse      = 490;

function init() {
  $('#game #horse').css({
    top: 490,
    left: 200
  });
}

function moveBackground(i) {
  i -= 10;
  $('#game').css("background-position", i + "px top");
  setTimeout('moveBackground(' + i + ')', 50);
}

function moveHorseUpDown(y, i) {
  if ( y <= 100 ) n = 50;
  if ( y >= 490 ) n = -50;

  y += n;

  $('#horse').css({top:y});

  // if ( i < 1000 ) {
  //   i += 1;
    setTimeout('moveHorseUpDown(' + y + ',' + i + ')', 100);
  // }
}

function startGame(x, y) {
  moveBackground(x);
  moveHorseUpDown(y, 1);
}

init();
startGame(startPosBackground, startPosHorse);
