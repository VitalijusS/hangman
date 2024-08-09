import { useState } from "react";
import { wordList } from "../data/words";

export function Buttons (){
    const [clicked, setToClicked] =useState({})


    function buttonPress(e){
        const letter = e.target.innerText;
        setToClicked((prevState) => ({
            ...prevState,
            [letter]: 'clicked',
        }));
    }


    return (
        <div className="buttonContainer">
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