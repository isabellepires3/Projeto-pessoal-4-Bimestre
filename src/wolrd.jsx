import React from 'react';

const Word = ({ word, guessedLetters }) => {
  return (
    <div className="word">
      {word.split('').map((letter, index) => (
        <span key={index} className="letter">
          {guessedLetters.includes(letter) ? letter : '_'}
        </span>
      ))}
    </div>
  );
}

export default Word;
