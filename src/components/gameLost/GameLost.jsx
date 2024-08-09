import { randomWord } from "../wordGenerator/WordGenereator"

export function GameLost(){
    const score = JSON.parse(localStorage.getItem('score'));
    score[1]++;
    localStorage.setItem('score',JSON.stringify(score))
    return(
        <div className="gameOver">
            <h3 className="lost">You lost</h3>
            <p className="gameLostText">The word was <span>{randomWord}</span></p>
            <button onClick={()=>window.location.reload()} className="restartBtn"> Pradėti žaidimą iš naujo</button>
        </div>
    )
}