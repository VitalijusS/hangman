import { randomWord } from "../wordGenerator/WordGenereator"


export function GameWon(){
    return(
        <div className="gameOver">
            <h3 className="win">You won</h3>
            <p className="gameWinText">The word was <span>{randomWord}</span></p>
            <button onClick={()=>window.location.reload()} className="restartBtn"> Play again</button>
        </div>
    )
}