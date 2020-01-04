/* 
Write your guess-game code here! Don't forget to look at the test specs as a guide. You can run the specs
by running "testem".

In this file, you will also include the event listeners that are needed to interact with your HTML file when
a user clicks a button or adds a guess to the input field.
*/

let generateWinningNumber = () => {
  return Math.round(Math.random() * (100 - 1) + 1);
};

let shuffle = array => {
  let m = array.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
};

class Game {
  constructor(playersGuess = null) {
    this.playersGuess = playersGuess;
    this.pastGuesses = [];
    this.winningNumber = generateWinningNumber();
  }

  difference() {
    return Math.abs(this.playersGuess - this.winningNumber);
  }

  isLower() {
    if (this.playersGuess < this.winningNumber) {
      return true;
    }
    return false;
  }

  playersGuessSubmission(num) {
    if (num < 1 || num > 100 || typeof num !== "number") {
      throw "That is an invalid guess.";
    }
    this.playersGuess = num;

    return this.checkGuess();
  }
}
