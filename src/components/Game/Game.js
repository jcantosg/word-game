import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessListWords from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });



function Game() {
  const [guessWords, setGuessWords] = React.useState([]);

  const addWord = tentativeGuess => {
    if (tentativeGuess.length < NUM_OF_GUESSES_ALLOWED) {
      setGuessWords([...guessWords, tentativeGuess]);
    }
  };

    return (
      <>
        <GuessListWords guessWords={guessWords} />
        <GuessInput addWord={addWord} />
      </>
    );
  }

  export default Game;
