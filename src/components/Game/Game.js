import React from 'react';

import { NUM_OF_GUESSES_ALLOWED, NUM_OF_LETTERS } from '../../constants';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import { sample } from '../../utils';
import Banner from '../Banner/Banner';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessIndex, setGuessIndex] = React.useState(0);
  const [guesses, setGuesses] = React.useState([
    ...Array(NUM_OF_GUESSES_ALLOWED).fill(
      { characters: Array(NUM_OF_LETTERS).fill(' '), statuses: Array(NUM_OF_LETTERS).fill(undefined, 0, NUM_OF_LETTERS) },
      0,
      NUM_OF_GUESSES_ALLOWED,
    ),
  ]);

  const handleNewGuess = (guess) => {
    if (guessIndex === 6) {
      return;
    }
    const newGuesses = [...guesses];
    const result = checkGuess(guess, answer);
    newGuesses[guessIndex] = {
      characters: guess.split(''),
      statuses: result.map((element) => element.status),
    };
    setGuessIndex((prevGuessIndex) => prevGuessIndex + 1);
    setGuesses(newGuesses);
  };
  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput handleSetGuesses={handleNewGuess} isEnabled={guessIndex < 6 && !guesses.some((x) => x.statuses.every((y) => y === 'correct'))} />
      {(guessIndex === 6 || guesses.some((x) => x.statuses.every((y) => y === 'correct'))) && (
        <Banner isSolved={guessIndex < 6} numGuesses={guessIndex} answer={answer} />
      )}
    </>
  );
}

export default Game;
