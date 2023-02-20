import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessListWords from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WinnerBanner from "../WinnerBanner/WinnerBanner";
import LostBanner from "../LostBanner/LostBanner";

// Pick a random word on every pageload.
export const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessWords, setGuessWords] = React.useState([]);
  const [statusGame, setStatusGame] = React.useState("running")

  const addWord = tentativeGuess => {
    const nextGuessWords = [...guessWords, tentativeGuess];
    setGuessWords([...guessWords, tentativeGuess]);


    if (tentativeGuess === answer) {
      setStatusGame("won");
    }

    if (nextGuessWords.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatusGame("lost");
    }
  };

  return (
    <>
      <GuessListWords guessWords={guessWords} answer={answer} setStatusGame={setStatusGame} />
      <GuessInput addWord={addWord} statusGame={statusGame} />
      {statusGame === "won" && <WinnerBanner numberOfTries={guessWords.length} />}
      {statusGame === "lost" && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
