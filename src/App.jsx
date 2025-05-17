import Board from "./components/Board"
import { useState } from "react"

function App() {
  const [started, setStarted] = useState(false);
  const handleStart = (e) => {
    setStarted(!started)
    e.target.style.visibility = 'hidden';
  }
  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <Board started={started} setStarted={setStarted}/>
      <button onClick={handleStart}>Start Game</button>
    </div>
  )
}

export default App
