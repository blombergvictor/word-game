import React from "react";
import Guess from "./Guess";

const Guesses = ({ guesses, answer }) => {
  return (
    <div className="guess-results">
      {guesses.map((guess) => (
        <Guess guess={guess} answer={answer} />
      ))}
    </div>
  );
}

export default Guesses;