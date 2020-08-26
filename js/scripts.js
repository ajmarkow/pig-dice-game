// ** Business Logic
function rollDice() {
  let dicevalue = Math.floor(Math.random() * 6) + 1;
  return dicevalue;
  console.log(dicevalue);
}

function scoreCard() {
  this.playerscorecard = [1, 2];
  return this.playerscorecard;
}

let player1scorecard = [1, 7, 9];

function grandTotal(array) {
  let grandtotal = array.reduce((a, b) => a + b);
  return grandtotal;
}

function turnTotal(array) {
  let answervalue = array.reduce((a, b) => a + b);
  return answervalue;
}
// function addScores(a, b) {
//   return a + b;
// }

function recordTurnScore(array) {
  let turnscore = array.reduce((a, b) => a + b);
  this.playerscorecard.push(turnscore);
}

switch (numberRolled) {
  case 1:
    console.log("Turn over!");
    break;
  default:
    console.log("Roll again or Hold");
}

rollDice();
// ** User Interface Logic

function attachButtonListeners() {
  $("#rolldieplayer1").on("click", function () {
    showButton(this.id);
  });
  $("#rolldieplayer2").on("click", function () {
    showButton(this.id);
  });
  $("#endturnplayer1").on("click", function () {
    showButton(this.id);
  });
  $("#endturnplayer2").on("click", function () {
    showButton(this.id);
  });
}
