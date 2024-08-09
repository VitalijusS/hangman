import { useState } from "react";
import { checkLetter, livesLeft } from "../checkLetters/check.letters";
import { randomWord } from "../wordGenerator/WordGenereator";
export function Buttons (){
    const [clicked, setToClicked] =useState({})


    function buttonPress(e){
        console.log(e.target.dataset.state);
        if(!e.target.dataset.state){
            const letter = e.target.innerText;
            setToClicked((prevState) => ({
                ...prevState,
                [letter]: randomWord.includes(letter.toLowerCase())?'included':'notIncluded',
            }));
            checkLetter(letter);

        }
    }


    return (
        <div className="buttonContainer">
            <h2 className="livesLeft ">Lives left: 
                <span> {livesLeft}</span>    
            </h2>
        
            <div>
                <button onClick={buttonPress} data-state={clicked.Q || ''}>W</button>
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
    )
}