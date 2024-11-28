import React, { useState } from 'react';
import './App.css';
import Keyboard from './keyboard';
import Message from './menssage'
import Word from './wolrd';

const words = ["apple", "banana", "grape", "orange", "strawberry"];

const App = () => {
  const [wordToGuess, setWordToGuess] = useState(words[Math.floor(Math.random() * words.length)]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [attempts, setAttempts] = useState(6);
  const [gameStatus, setGameStatus] = useState(null); 

  const handleGuess = (letter) => {
    if (guessedLetters.includes(letter) || gameStatus) return;

    setGuessedLetters([...guessedLetters, letter]);

    if (!wordToGuess.includes(letter)) {
      setAttempts(attempts - 1);
    }

    if (attempts === 1) {
      setGameStatus('lose');
    } else if (wordToGuess.split('').every(l => guessedLetters.includes(l) || l === letter)) {
      setGameStatus('win');
    }
  };

  const resetGame = () => {
    setWordToGuess(words[Math.floor(Math.random() * words.length)]);
    setGuessedLetters([]);
    setAttempts(6);
    setGameStatus(null);
  };

  return (
    <div className="game-container">
      <h1>Adivinha a Palavra</h1>
      <Word word={wordToGuess} guessedLetters={guessedLetters} />
      <Message gameStatus={gameStatus} attempts={attempts} resetGame={resetGame} />
      <Keyboard onGuess={handleGuess} />
    </div>
  );
}

export default App;
