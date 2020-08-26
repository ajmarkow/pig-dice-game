# _Pig Dice Game_

---

_Allows user to play the dice game pig dice, Wednesday, August 26, 2020_

By **_Alexander Markow and Ophelia Swen_**

## Description

_An application which allows you to play the game pig dice. Two users may roll dice, and the first play to roll to 100 wins. To end each turn a player either holds their score or rolls a one._

## Setup/Installation Requirements

_1. Open HTML Page on Web Server. 2. Make sure links to resources are working. 3. Begin to play Pig Dice._

## Known Bugs

_Will update as we develop application further._

## Support and contact details

ophelia.swen@gmail.com or alexanderjmarkow@gmail.com

## Technologies Used

_Bootstrap, CSS, Git, HTML, JavaScript, and jQuery_

### License

MIT License

Copyright (c) 2020 AJ Markow, Ophelia Swen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

**Test Specifications**

'########::'####::'######::::::'########::'####::'######::'########:
##.... ##:. ##::'##... ##::::: ##.... ##:. ##::'##... ##: ##.....::
##:::: ##:: ##:: ##:::..:::::: ##:::: ##:: ##:: ##:::..:: ##:::::::
########::: ##:: ##::'####:::: ##:::: ##:: ##:: ##::::::: ######:::
##.....:::: ##:: ##::: ##::::: ##:::: ##:: ##:: ##::::::: ##...::::
##::::::::: ##:: ##::: ##::::: ##:::: ##:: ##:: ##::: ##: ##:::::::
##::::::::'####:. ######:::::: ########::'####:. ######:: ########:
..:::::::::....:::......:::::::........:::....:::......:::........::

**_Objects_**
Scorecard
Die? or variable.
Turn
Player 1 - variables
Player 2 - variables

**_To Do_**

**_Summary of Rules_**

1. Player Rolls a Die
   If roll = 1
   score added is 0
2. If roll does not equal 1
   score added is equal to number rolled
3. If player wants to end turn & has not rolled a one, they can hold. Hold means adding the accumulated points from the turn to their score.
4. First player to get to 100 points wins.

### Specs

| Spec                                                                                        | Input                                               | Output                                |
| :------------------------------------------------------------------------------------------ | :-------------------------------------------------- | :------------------------------------ |
| **Player rolls die to get a number**                                                        | Button                                              | 6                                     |
| **If player rolls 1, player loses all accumulated points during their turn and turn ends.** | User input: If they hit roll die again, and get a 1 | Alert turn is over                    |
| **If player rolls number other than 1, roll again and add points to turn total**            | 5                                                   | 5                                     |
| **If player reaches 100, they win**                                                         | 3                                                   | Congratulations! You win.             |
| **If player ends turn by hold, points accumulated on turn is added to overall total**       | 15                                                  | 32                                    |
| **When die is rolled, the number the die landed on is displayed**                           | Die roll button is clicked                          | Die roll is shown in designated area. |

**_Tests_**

Describe: Dice roll gives you a random number from 1-6

ScoreCard.prototype.subTotal = function () {
this.currentScore +=1;
return this.currentScore;
}

Describe: Scorecard will have 2 arrays, one for each player, which can be called using function scoreCard();
Test: scorecard.total returns value of all numbers in array added
Code: scoreCard.total([1,2,3])
Expect: scoreCard.total.toEqual(6)

- rollDice()
  \*Test: roll is a random number
  Code: rollDice();
  Expect: return(randomnumber);
  Test Passed

- scoreCard()
- createTurn(dicevalue)

- grandTotal(array)
  -Describe: Adds the turn totals array together to get total round score for player
  Test: adds 2,3 1 = 6
  Code:grandTotal(arrayname);
  Expect: arrayname total returned, equal to 6
  Test Passed

- turnTotal(array)
  -Describe: Adds the roll totals array together to get total round score for player
  Test: adds 2,3 1 = 6
  Code:grandTotal(arrayname);
  Expect: arrayname total returned, equal to 6
  Test Passed

- recordTurnScore(array)
- newGame()
  Describe:emptys player scorecard arrays
  Test: arrays with content now equal zero
  Code: newGame()
  Expect: player1scorecard = [] and player2scorecard = []
- youWon()
  -Describe: Shows alert and HTML saying "You Won!"
  - \*Test:youWon().toEqual= alert (you Won!)
    Code:youWon();
    Expect:Alert saying you won!
    Test Passed
