// ** Business Logic
let player1scorecard = [2, 3];
let player2scorecard = [];
let player1turnarray = [];
let player2turnarray = [];

function rollDice() {
  let dicevalue = Math.floor(Math.random() * 6) + 1;
  this.dicevalue = dicevalue;
  return dicevalue;
  console.log(dicevalue);
}

function scoreCard() {
  this.playerscorecard = [];
  return this.playerscorecard;
}

// *Doesn't work
function createTurn(dicevalue) {
  const turnarray = [];
  for (let index = 1; dicevalue != 1; index += 1) {
    turnarray.push(dicevalue);
    console.log(turnarray);
  }
}

function grandTotal(array) {
  let grandtotal = array.reduce((a, b) => a + b);
  return grandtotal;
}

function turnTotal(array) {
  let answervalue = array.reduce((a, b) => a + b);
  return answervalue;
}

function recordTurnScore(array) {
  let turnscore = array.reduce((a, b) => a + b);
  this.playerscorecard.push(turnscore);
  player1turnarray.length = 0;
}

const numberRolled = 1;
switch (numberRolled) {
  case 1:
    console.log("Turn over!");
    break;
  default:
    console.log("Roll again or Hold");
}

function newGame() {
  player1scorecard.length = 0;
  player2scorecard.length = 0;
}

function youWon() {
  alert("YOU WON!");
  $("#youwon").HTML("<em>");
}

function player(playername) {
  this.name = name;
  this.scoreCard = scoreCard;
  this.turnTotal = turnTotal();
}

let player1 = { name: "player1", arrays: [player1turnarray, player1scorecard] };
let player2 = { name: "player1", arrays: [player2turnarray, player2scorecard] };

// function nextTurn(){
//     if (player 1 turn)
//     thearraywewant to select = variable target array
//     else (player 2 turn )
//     the other players array =variable representing target array
// }
// ** User Interface Logic

// $(#button).click(function(){
// turnarray = 0;
// for (var i)

// }

// function attachButtonListeners() {
//   $("#rolldieplayer1").on("click", function () {
//     showButton(this.id);
//   });
//   $("#rolldieplayer2").on("click", function () {
//     showButton(this.id);
//   });
//   $("#endturnplayer1").on("click", function () {
//     showButton(this.id);
//   });
//   $("#endturnplayer2").on("click", function () {
//     showButton(this.id);
//   });
// }
