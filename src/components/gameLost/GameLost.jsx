import { randomWord } from "../wordGenerator/WordGenereator"

export function GameLost(){
    return(
        <div className="gameOver">
            <h3>You lost</h3>
            <p className="gameLostText">The word was {randomWord}</p>
            <button onClick={()=>window.location.reload()} className="restartBtn"> Play again</button>
        </div>
    )
}