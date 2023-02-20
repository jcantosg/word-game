import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";
  return <span className={className}>{letter}</span>;
}

function Guess({ word = "", answer }) {
  console.log({ word });
  const result = checkGuess(word, answer);

  return (
    <p className="guess">
      {range(5).map((index) => {
        return (
          <Cell
            letter={result ? result[index].letter : undefined}
            status={result ? result[index].status : undefined}
            key={index}
          />
        );
      })}
    </p>
  );
}

export default Guess;
