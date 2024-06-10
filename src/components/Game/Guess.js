import { checkGuess } from '../../game-helpers'

function Letter(guess, answer, letter, index){
  const arrayOfLetters = checkGuess(guess.guess, answer)

  const findLetterStatus = (array, targetLetter) => {
    const found = array.find(item => item.letter === targetLetter);
    return found ? found.status : '';
  };

  const status = findLetterStatus(arrayOfLetters, letter);
  return <span className={`cell ${status}`} key={index}>{letter}</span>
}

function Guess( { guess, answer }){
  return <p key={guess["id"]} className="guess">
    {guess.guess.split("").map((letter, index) => (
      Letter(guess, answer, letter, index)
    ))}
  </p>
}

export default Guess;