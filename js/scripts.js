// ** Business Logic
// let player1scorecard = [2, 3];
// let player2scorecard = [];
// let player1turnarray = [];
// let player2turnarray = [];

// function rollDice() {
//   let dicevalue = Math.floor(Math.random() * 6) + 1;
//   // * ! this keyword is only used in prototype methods.
//   // this.dicevalue = dicevalue;
//   return dicevalue;
//   console.log(dicevalue);
// }

// function scoreCard() {
//    // * ! this keyword is only used in prototype methods.
//   // this.playerscorecard = [];
//   return this.playerscorecard;
// }

// // *Doesn't work
// function createTurn(dicevalue) {
//   const turnarray = [];
//   // for (let index = 1; dicevalue != 1; index += 1) {
//   turnarray.push(dicevalue);
//   console.log(turnarray);
//   // }
// }

// function grandTotal(array) {
//   let grandtotal = array.reduce((a, b) => a + b);
//   return grandtotal;
// }

// function turnTotal(array) {
//   let answervalue = array.reduce((a, b) => a + b);
//   return answervalue;
// }

// function recordTurnScore(array) {
//   let turnscore = array.reduce((a, b) => a + b);
//   this.playerscorecard.push(turnscore);
//   player1turnarray.length = 0;
// }
// function EndTurn() {
//   const numberRolled = 1;
//   switch (numberRolled) {
//     case (1):
//       console.log("Turn over!");
//       break;
//     default:
//       console.log("Roll again or Hold");
//   }
// }

// function newGame() {
//   player1scorecard.length = 0;
//   player2scorecard.length = 0;
// }

// function youWon() {
//   alert("YOU WON!");
//   $("#youwon").HTML("<em>");
// }

//Object Constructor
function player(playername) {
  this.name = playername;
  this.scoreCard = [];
  this.turnArray = [];
  this.roll = 0;
  // this.hold = recordTurnScore();
  this.grandTotal = 0;
  this.turnTotal = 0;
}

let player1 = new player("person");
let player2 = new player("otherperson");

// works without parameter (roll function)
player.prototype.diceRoll = function (roll) {
  this.roll = Math.floor(Math.random() * 6) + 1;
  this.turnArray.push(this.roll);
  if (this.roll === 1) {
    console.log("Turn over!");
  } else {
    console.log("Roll again or Hold");
  }
  return this.roll;
};

player.prototype.addedTotal = function () {
  let grandtotal = this.scoreCard.reduce((a, b) => a + b);
  return grandtotal;
};

player.prototype.turnTotal = function () {
  let answervalue = this.turnArray.reduce((a, b) => a + b);
  return answervalue;
};

player.prototype.recordTurnScore = function () {
  console.log(this.turnArray);
  let turnscore = this.turnArray.reduce((a, b) => a + b);
  this.scoreCard.push(turnscore);
  this.turnArray.length = 0;
  return turnscore;
};

player.prototype.EndTurn = function () {
  let numberRoll = this.turnArray.slice(-1);
  if (numberRoll === 1) {
    console.log("Turn over!");
  } else {
    console.log("Roll again or Hold");
  }
};

player.prototype.checkScore = function () {
  if (this.addedTotal(this.scoreCard) >= 100) {
    youWon();
  } else {
  }
};

player.prototype.youWon = function () {
  alert(this.player.name + "WON!");
  $("#youwon").HTML("<em>");
};

player.prototype.getScore = function () {
  return this.scoreCard;
};

// * ! Try approach like line 110.
// let player1 = { name: "player1", arrays: [player1turnarray, player1scorecard] };
// let player2 = { name: "player1", arrays: [player2turnarray, player2scorecard] };

//How you call the prototype function on the constructor object
// player1.roll()

// function nextTurn(){
//     if (player 1 turn)
//     thearraywewant to select = variable target array
//     else (player 2 turn )
//     the other players array =variable representing target array
// }
// ** User Interface Logic

//Click Button to roll event

// $(#button).click(function(event){
//   event.preventDefault();

// });
// console.log(player1.name);
// console.log(player2.name);
// console.log(player2.turnArray);
// console.log(player2.scoreCard);
// console.log(player1.addedTotal);
// console.log(player1.diceRoll());

// function attachButtonListeners() {
$(document).ready(function (event) {
  // event.preventDefault();
  $("#rolldieplayer1").on("click", function () {
    console.log(player1);
    // event.preventDefault();
    let output = player1.diceRoll();
    console.log(output);
    console.log(player1);
    //! * not sure if it works
    // ? does this work
    player1.recordTurnScore();
    // console.log(player1.diceRoll());
    console.log(player1.name);
    player1.checkScore();
    // player1.EndTurn();
  });
  $("#rolldieplayer2").on("click", function () {
    console.log(player2.name);
  });
  $("#endturnplayer1").on("click", function () {
    showButton(this.id);
  });
  $("#endturnplayer2").on("click", function () {
    showButton(this.id);
  });
});
// }
