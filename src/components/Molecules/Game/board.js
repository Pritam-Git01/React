import React, { useState } from 'react';
import Square from '../../Atoms/Square/square'
import styles from './board.module.css';




function Board() {
  const [isNextMove, setIsNextMove] = useState(true)

  const [clicks, setClicks] = useState(Array(9).fill(null))
  function handleClick(i) {
    if (clicks[i] || findWinner(clicks)) {
      return;
    }

    const nextClicks = clicks.slice()

    if (isNextMove) {
      nextClicks[i] = "X"
    } else {
      nextClicks[i] = "0"
    }

    setClicks(nextClicks)
    setIsNextMove(!isNextMove)
  }

  const winner = findWinner(clicks)
  let status;
  if (winner) {
    status = 'Player  ' + winner + ' is winner'
  } else {
    status = ' Next player ' + (isNextMove ? "X" : "0")
  }

  function handleResetButton() {
    setIsNextMove(true)
    setClicks((Array(9).fill(null)))
  }




  return (
    <div className={styles.wraper}>
      <div className={styles.status}>{status}</div>
      <div className={styles.firstRow}>
        <Square value={clicks[0]} onButtonClick={() => handleClick(0)} />
        <Square value={clicks[1]} onButtonClick={() => handleClick(1)} />
        <Square value={clicks[2]} onButtonClick={() => handleClick(2)} />

      </div>
      <div className={styles.secondRow}>
        <Square value={clicks[3]} onButtonClick={() => handleClick(3)} />
        <Square value={clicks[4]} onButtonClick={() => handleClick(4)} />
        <Square value={clicks[5]} onButtonClick={() => handleClick(5)} />

      </div>

      <div className={styles.thirdRow}>
        <Square value={clicks[6]} onButtonClick={() => handleClick(6)} />
        <Square value={clicks[7]} onButtonClick={() => handleClick(7)} />
        <Square value={clicks[8]} onButtonClick={() => handleClick(8)} />

      </div>
      <div>
        <button className={styles.btn} onClick={handleResetButton}>Play Again </button>

      </div>

    </div>
  )
}
function findWinner(clicks) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (clicks[a] && clicks[a] === clicks[b] && clicks[a] === clicks[c]) {
      return clicks[a]
    }
  }
  return null;
}


export default Board;