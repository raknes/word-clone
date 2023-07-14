import React from 'react';

function GuessInput({ handleSetGuesses }) {
  const [guess, setGuess] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ guess });
    handleSetGuesses(guess);
    setGuess('');
  };
  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input id="guess-input" pattern=".{5,5}" type="text" value={guess} onChange={(e) => setGuess(e.target.value.toUpperCase())} />
      </form>
    </div>
  );
}

export default GuessInput;
