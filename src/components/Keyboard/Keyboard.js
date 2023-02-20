import React from "react";

const LETTERS_KEYBOARD = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

const getStatusByLetter = (validateGuesses) => {
  const letters = {};
  validateGuesses.forEach((word) => {
    word.forEach(({ letter, status }) => {
      letters[letter] = status;
    });
  });

  return letters;
};

function Keyboard({ validateGuesses }) {
  const statusByLetter = getStatusByLetter(validateGuesses);

  return (
    <div className="keyboard">
      {LETTERS_KEYBOARD.map((row, rowIndex) => (
        <div className="keyboard-row" key={rowIndex}>
          {row.map((letter, letterIndex) => (
            <button className={`letter ${statusByLetter[letter]}`} key={letterIndex}>
              {letter}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
