import React from 'react';

function Guess({ guess }) {
  console.log(guess);
  return (
    <p className="guess">
      {guess.characters.map((element, index) => (
        <span key={index} className={`cell ${guess.statuses[index] ?? ''}`}>
          {element}
        </span>
      ))}
    </p>
  );
}

export default Guess;
