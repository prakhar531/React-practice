import { useState } from 'react'
export default function LudoBoard() {
    let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });
    return (
        <div>
            <p>Game Begins</p>
            <div className="board">
                <p>Blue Moves={moves.blue}</p>
                <button>+1</button>
                <p>Yellow Moves={moves.yellow}</p>
                <button>+1</button>
                <p>Green Moves={moves.green}</p>
                <button>+1</button>
                <p>Red Moves={moves.red}</p>
                <button>+1</button>

            </div>
        </div>
    )
}