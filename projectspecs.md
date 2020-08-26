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
Test: roll is a random number
Code: rollDice();
Expect: return(randomnumber);
Test Passed
