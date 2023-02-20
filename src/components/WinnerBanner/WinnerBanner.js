import React from "react";
import Banner from "../Banner/Banner";

function WinnerBanner({ numberOfTries, handleRestart }) {
  return (
    <Banner statusGame="happy" action={handleRestart}>
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numberOfTries === 1 ? "1 guess" : `${numberOfTries} guesses`}
        </strong>
        .
      </p>
    </Banner>
  );
}

export default WinnerBanner;
