import React, { useState } from 'react';

import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessForm from './GuessForm.js';
import Guesses from './Guesses.js';
import GuessStatus from './GuessStatus.js';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.


function Game() {
  const [currentStatus, setCurrentStatus] = useState('playing');
  const [submittedGuessesNum, setSubmittedGuessesNum] = useState(0);
  const [guesses, setGuesses] = React.useState([]);

  function initializeGame(){
    setGuesses(Array.from({ length: NUM_OF_GUESSES_ALLOWED }, () => ({ guess: "     ", id: crypto.randomUUID() })));
  }

  function submitGuess(guess){
    setSubmittedGuessesNum(submittedGuessesNum + 1)

    if (submittedGuessesNum >= NUM_OF_GUESSES_ALLOWED) {
      setCurrentStatus('looser')
      return 
    }
  
    // Update the guesses state with the new guess.
    setGuesses((prevGuesses) => {
      return [{ guess, id: crypto.randomUUID() }, ...prevGuesses];
    });

    if (guess === answer) {
      setCurrentStatus('winner')
      return
    }

    // Remove last guess from guesses state
    // if there are more than 5 guesses
    setGuesses((prevGuesses) => {
      return prevGuesses.slice(0, NUM_OF_GUESSES_ALLOWED);
    });
    
    console.log({guesses})
    console.info({ guess });
    console.info({ answer });
  }


  useState(() => {
    initializeGame()
  })

  return <>
    <Guesses guesses={guesses} answer={answer} />
    <GuessForm submitGuess={submitGuess} currentStatus={currentStatus} />
    
    {currentStatus != "playing" && <GuessStatus currentStatus={currentStatus} answer={answer} submittedGuessesNum={submittedGuessesNum} />}
  </>;
}

export default Game;