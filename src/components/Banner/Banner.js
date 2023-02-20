import React from "react";

function Banner({ statusGame, action, children }) {
  return (
    <div className={`${statusGame} banner`}>
      {children}
      <button onClick={action}>Restart Game</button>
    </div>
  );
}

export default Banner;
