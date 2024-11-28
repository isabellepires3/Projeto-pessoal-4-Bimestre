import React from 'react';

const Keyboard = ({ onGuess }) => {
  const letters = "abcdefghijklmnopqrstuvwxyz".split('');

  return (
    <div className="keyboard">
      {letters.map((letter, index) => (
        <button key={index} onClick={() => onGuess(letter)}>
          {letter}
        </button>
      ))}
    </div>
  );
}

export default Keyboard;
