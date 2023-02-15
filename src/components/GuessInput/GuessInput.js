import React from "react";

function GuessInput({ addWord }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (tentativeGuess.length !== 5) {
      alert("Please enter a 5 letter word 😍");
    }

    console.log({ tentativeGuess });
    addWord(tentativeGuess);
    setTentativeGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        required
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={(e) => setTentativeGuess(e.target.value.toLocaleUpperCase())}
      />
    </form>
  );
}

export default GuessInput;
