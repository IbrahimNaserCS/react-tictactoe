function Cell(props) {
    const { cellnum, clicked, setClicked, winner, setWinner, started, turn, setTurn, grid, setGrid } = props
    function checkWin() {
        if (grid[0] == turn && grid[1] == turn && grid[2] == turn) {
            setWinner(turn)
        } else if (grid[3] == turn && grid[4] == turn && grid[5] == turn) {
            setWinner(turn)
        } else if (grid[6] == turn && grid[7] == turn && grid[8] == turn) {
            setWinner(turn)
        } else if (grid[0] == turn && grid[3] == turn && grid[6] == turn) {
            setWinner(turn)
        } else if (grid[1] == turn && grid[4] == turn && grid[7] == turn) {
            setWinner(turn)
        } else if (grid[2] == turn && grid[5] == turn && grid[8] == turn) {
            setWinner(turn)
        } else if (grid[0] == turn && grid[4] == turn && grid[8] == turn) {
            setWinner(turn)
        } else if (grid[2] == turn && grid[4] == turn && grid[6] == turn) {
            setWinner(turn)
        }
    }
    const handleClick = (e) => {
        if (!started) {
            return
        }
        const newarr = grid
        if (clicked[e.target.id.slice(-1)]) {
            return
        }
        newarr[e.target.id.slice(-1)] = turn
        const newclicked = clicked;
        newclicked[e.target.id.slice(-1)] = true
        setClicked(newclicked)
        setGrid(newarr)
        checkWin()
        if (winner) {
            return
        }
        if (turn == 'O') {
            setTurn('X')
        } else {
            setTurn('O')
        }
    }
    return (
        <div onClick={handleClick} className="cell" id={`card-${cellnum}`}>{grid[cellnum]}</div>
    )
}

export default Cell