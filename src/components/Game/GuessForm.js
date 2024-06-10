import React, { useState, useEffect } from 'react';

const GuessForm = ({ submitGuess, currentStatus }) => {
  const [guess, setGuess] = useState("");

  const handleGuess = (e) => {
    const guess = e.target.value;
    if (guess.length > 5) return; 
    setGuess(guess.toUpperCase());
  };

  return (
    <>
      
        <div className='guess-input-wrapper'>
          <form onSubmit={e => {
            e.preventDefault();
            if (guess.length != 5) return;
            submitGuess(guess);
            setGuess("");
          }}>
          
          
            <label htmlFor="guess">Enter guess:</label>
            <input 
              type="text" 
              name="guess" 
              value={guess}
              onChange={(e) => handleGuess(e)}
              pattern="[A-Za-z]{1,5}"
              className=''
              disabled={currentStatus !== 'playing'}
            />
          </form>
        </div>
      
    </>
  );
};

export default GuessForm;