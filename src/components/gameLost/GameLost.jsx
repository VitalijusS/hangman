import { useEffect, useState } from "react";
import { randomWord } from "../wordGenerator/WordGenereator"

export function GameLost() {
    const [loseScore, setLoseScore] = useState(localStorage.getItem('loseScore'));
    useEffect(() => {
        setLoseScore(num => +num + 1);

    }, [])
    localStorage.setItem('loseScore', loseScore);
    // useEffect(() => {
    // window.addEventListener('keyup', () => {
    //     window.location.reload()
    // })
    // })


    return (
        <div className="gameOver">
            <h3 className="lost">You lost</h3>
            <p className="gameLostText">The word was <span>{randomWord}</span></p>
            <button onClick={() => window.location.reload()} className="restartBtn"> Pradėti žaidimą iš naujo</button>
        </div>
    )
}