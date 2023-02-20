import React from "react";

function WinnerBanner({ numberOfTries }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {numberOfTries === 1 ? "1 guess" : `${numberOfTries} guesses`}
        </strong>
        .
      </p>
    </div>
  );
}

export default WinnerBanner;
