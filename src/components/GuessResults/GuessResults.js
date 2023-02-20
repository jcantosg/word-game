import React from "react";

import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";

function GuessResults({ guessWords, answer, statusGame }) {
  return (
    <div className="guess-results">

      {range(0, NUM_OF_GUESSES_ALLOWED).map((index) => (
        <Guess key={index} word={guessWords[index]} answer={answer} statusGame={statusGame} />
      ))}

    </div>
  );
}

export default GuessResults;
