import { useState } from "react";
import { checkLetter, livesLeft } from "../checkLetters/check.letters";
import { randomWord } from "../wordGenerator/WordGenereator";
import { HiddenLetter } from "../hiddenLetter/Hiddenletter";
import { HangMan } from "../hangman/HangMan";
import { GameLost } from "../gameLost/GameLost";
import { GameWon } from "../gameWon/GameWon";
import { Score } from "../score/Score";

localStorage.setItem('pressedLetters',JSON.stringify([]))
const localData = [];
if(localStorage.getItem('score')===null){
    localStorage.setItem('score',JSON.stringify([0,0]))
}

let isWin = false;
export function Buttons (){
    function handleKeyDown(event) {
      if ('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(event.key)){
            buttonPress({target:{innerText:event.key}});
      }
    }
    const [clicked, setToClicked] =useState({})

    function buttonPress(e){
        console.log(e)
        if(!e.target.dataset.state && livesLeft > 0 && !isWin){
            const letter = e.target.innerText;
            localData.push(letter);
            localStorage.setItem('pressedLetters',JSON.stringify(localData))
            setToClicked((prevState) => ({
                ...prevState,
                [letter]: randomWord.includes(letter.toLowerCase())?'included':'notIncluded',
            }));
            checkLetter(letter);
            checkIfWin()
        }
    }
    function checkIfWin(){
        if(randomWord.split('').
        filter(letter =>!localData.includes(letter.toLocaleUpperCase())).length === 0){
            isWin = true;
        }
    }

    return (
        <div onKeyDown={handleKeyDown}>
        <Score />
        {livesLeft===0?<GameLost />:''}
        {isWin?<GameWon />:''}
        <HangMan data={livesLeft} winStatus = {isWin}/>
        <HiddenLetter data={localData} />
        <h2 className="livesLeft ">Lives left:<span> {livesLeft}</span></h2>

        <div className="buttonContainer" >
            <div>
                <button onClick={buttonPress} data-state={clicked.Q || ''}>Q</button>
                <button onClick={buttonPress} data-state={clicked.W || ''}>W</button>
                <button onClick={buttonPress} data-state={clicked.E || ''}>E</button>
                <button onClick={buttonPress} data-state={clicked.R || ''}>R</button>
                <button onClick={buttonPress} data-state={clicked.T || ''}>T</button>
                <button onClick={buttonPress} data-state={clicked.Y || ''}>Y</button>
                <button onClick={buttonPress} data-state={clicked.U || ''}>U</button>
                <button onClick={buttonPress} data-state={clicked.I || ''}>I</button>
                <button onClick={buttonPress} data-state={clicked.O || ''}>O</button>
                <button onClick={buttonPress} data-state={clicked.P || ''}>P</button>
            </div>
            <div>
                <button onClick={buttonPress} data-state={clicked.A || ''}>A</button>
                <button onClick={buttonPress} data-state={clicked.S || ''}>S</button>
                <button onClick={buttonPress} data-state={clicked.D || ''}>D</button>
                <button onClick={buttonPress} data-state={clicked.F || ''}>F</button>
                <button onClick={buttonPress} data-state={clicked.G || ''}>G</button>
                <button onClick={buttonPress} data-state={clicked.H || ''}>H</button>
                <button onClick={buttonPress} data-state={clicked.J || ''}>J</button>
                <button onClick={buttonPress} data-state={clicked.K || ''}>K</button>
                <button onClick={buttonPress} data-state={clicked.L || ''}>L</button>
            </div>
            <div>
                <button onClick={buttonPress} data-state={clicked.Z || ''}>Z</button>
                <button onClick={buttonPress} data-state={clicked.X || ''}>X</button>
                <button onClick={buttonPress} data-state={clicked.C || ''}>C</button>
                <button onClick={buttonPress} data-state={clicked.V || ''}>V</button>
                <button onClick={buttonPress} data-state={clicked.B || ''}>B</button>
                <button onClick={buttonPress} data-state={clicked.N || ''}>N</button>
                <button onClick={buttonPress} data-state={clicked.M || ''}>M</button>

            </div>
        </div>
        </div>
    )
}
