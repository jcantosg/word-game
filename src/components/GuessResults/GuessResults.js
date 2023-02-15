import React from "react";

import { range } from "../../utils";
import  { NUM_OF_GUESSES_ALLOWED } from  "../../constants";
import Guess from "../Guess/Guess";

function GuessResults({ guessWords }) {
  return (
    <div className="guess-results">
      {/* {guessWords.map((word, index) => (
        <p className="guess" key={index}>
          {word}
        </p>
      ))} */}
      {range(0, NUM_OF_GUESSES_ALLOWED).map((index) => (
        <Guess key={index} word={guessWords[index]} />
      ))}

    </div>
  );
}

export default GuessResults;
