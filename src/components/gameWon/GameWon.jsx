import { randomWord } from "../wordGenerator/WordGenereator"


export function GameWon(){
    const score = JSON.parse(localStorage.getItem('score'));
    score[0]++;
    localStorage.setItem('score',JSON.stringify(score))

    return(
        <div className="gameOver">
            <h3 className="win">You won</h3>
            <p className="gameWinText">The word was <span>{randomWord}</span></p>
            <button onClick={()=>window.location.reload()} className="restartBtn"> Pradėti naują žaidimą</button>
        </div>
    )
}