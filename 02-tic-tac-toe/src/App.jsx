import { useState } from "react";
import "./App.css";
import Square from "./App/Square";

const TURNS = {
  x: "x",
  o: "o",
};


function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.x);

  const updateBoard = () => {
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x;
  }

  console.log(board);
  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <section className="board-game">
        {board.map((cell, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.x }>{TURNS.x}</Square>
        <Square isSelected={turn === TURNS.o }>{TURNS.o}</Square>
      </section>
    </main>
  );
}

export default App;
