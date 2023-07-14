import React from 'react';
import Guess from '../Guess';

function GuessResults({ guesses }) {
  console.log(guesses);
  return (
    <div className="guess-results">
      {guesses.map((guess, index) => {
        return <Guess guess={guess} key={index} />;
      })}
    </div>
  );
}

export default GuessResults;
