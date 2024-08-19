import { useEffect, useState } from "react";
import { randomWord } from "../wordGenerator/WordGenereator"


export function GameWon() {
    const [winScore, setWinScore] = useState(localStorage.getItem('winScore'))
    useEffect(() => {
        setWinScore(num => +num + 1);
    }, [])

    localStorage.setItem('winScore', winScore)
    return (
        <div className="gameOver">
            <h3 className="win">You won</h3>
            <p className="gameWinText">The word was <span>{randomWord}</span></p>
            <button onClick={() => window.location.reload()} className="restartBtn"> Pradėti naują žaidimą</button>
        </div>
    )
}