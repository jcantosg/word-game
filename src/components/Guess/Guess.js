import React from "react";
import { range } from "../../utils";

function Guess({ word = "" }) {
  console.log({ word });
  return (
    <p className="guess">
      {range(5).map((index) => (
        <span key={index} className="cell">
          {word[index] || ""}
        </span>
      ))}
    </p>
  );
}

export default Guess;
