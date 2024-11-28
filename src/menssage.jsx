import React from 'react';

const Menssage = ({ gameStatus, attempts, resetGame }) => {
  if (gameStatus === 'win') {
    return <div className="message">Parabéns! 🎉 <button onClick={resetGame}>Tente Novamente</button></div>;
  }

  if (gameStatus === 'lose') {
    return <div className="message">Não foi dessa vez! 😞 <button onClick={resetGame}>Tente Novamente</button></div>;
  }

  return <div className="message">Tentativas: {attempts}</div>;
}

export default Menssage;