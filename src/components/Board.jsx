import { useState } from "react"
import Cell from "./Cell"

function Board(props) {
  const [grid, setGrid] = useState(['', '', '', '', '', '', '', '', ''])
  const [turn, setTurn] = useState('O')
  const [clicked, setClicked] = useState([false, false, false, false, false, false, false, false, false])
  const [winner, setWinner] = useState(null)
  const { started, setStarted } = props
  function handleReset() {
    setGrid(['', '', '', '', '', '', '', '', ''])
    setTurn('O')
    setClicked([false, false, false, false, false, false, false, false, false])
    setWinner(null)
  }
  return (
    <>
    {winner ? 
    (<div className="winner">
        <span>{`${winner} won!`}</span>
        <button onClick={handleReset}>Reset</button>
    </div>) :
    (<div className="board">
        {grid.map((item, i) => (
            <Cell clicked={clicked} setClicked={setClicked} winner={winner} setWinner={setWinner} started={started} turn={turn} setTurn={setTurn} grid={grid} setGrid={setGrid} cellnum={i} key={i}/>
        ))}
    </div>)
    }
    </>
  )
}

export default Board
