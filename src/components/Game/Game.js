import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessListWords from "../GuessResults/GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import WinnerBanner from "../WinnerBanner/WinnerBanner";
import LostBanner from "../LostBanner/LostBanner";
import Keyboard from "../Keyboard/Keyboard";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
//export const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  console.info({ answer });

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

  const handleRestart = () => {
    setAnswer(sample(WORDS));
    setGuessWords([]);
    setStatusGame("running");
  };
  

  const validateGuesses = guessWords.map(guess => checkGuess(guess, answer))

  return (
    <>
      <GuessListWords guessWords={guessWords} answer={answer} setStatusGame={setStatusGame} />
      <GuessInput addWord={addWord} statusGame={statusGame} />
      <Keyboard validateGuesses={validateGuesses} answer={answer} />
      {statusGame === "won" && <WinnerBanner numberOfTries={guessWords.length} handleRestart={handleRestart} />}
      {statusGame === "lost" && <LostBanner answer={answer} handleRestart={handleRestart} />}
    </>
  );
}

export default Game;
