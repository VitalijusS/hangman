import { checkLetter } from "../checkLetters/checkLetters";
import { randomWord } from "../wordGenerator/WordGenereator";
import { HiddenLetter } from "../hiddenLetter/Hiddenletter";
import { HangMan } from "../hangman/HangMan";
import { GameLost } from "../gameLost/GameLost";
import { GameWon } from "../gameWon/GameWon";
import { Score } from "../score/Score";
import { MoreButtons } from "../moreButtons/MoreButtons";
import { useEffect, useState } from "react";

localStorage.setItem('pressedLetters', JSON.stringify([]))


const localData = [];

export function Buttons() {

    const [livesLeft, setLivesLeft] = useState(6);
    const [isWin, changeIsWin] = useState(false);
    const [abc, changeAbcState] = useState([
        { text: 'Q', state: '' }, { text: 'W', state: '' }, { text: 'E', state: '' }, { text: 'R', state: '' },
        { text: 'T', state: '' }, { text: 'Y', state: '' }, { text: 'U', state: '' }, { text: 'I', state: '' },
        { text: 'O', state: '' }, { text: 'P', state: '' }, { text: 'A', state: '' }, { text: 'S', state: '' },
        { text: 'D', state: '' }, { text: 'F', state: '' }, { text: 'G', state: '' }, { text: 'H', state: '' },
        { text: 'J', state: '' }, { text: 'K', state: '' }, { text: 'L', state: '' }, { text: 'Z', state: '' },
        { text: 'X', state: '' }, { text: 'C', state: '' }, { text: 'V', state: '' }, { text: 'B', state: '' },
        { text: 'N', state: '' }, { text: 'M', state: '' },])

    function buttonPress(e) {
        let letter = '';
        if (typeof e === 'string') {
            letter = e
        } else {
            letter = e.target.innerText;
        }
        if ('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(letter)) {
            if (livesLeft > 0 && !isWin && !localData.includes(letter)) {
                localData.push(letter);
                localStorage.setItem('pressedLetters', JSON.stringify(localData))
                if (!checkLetter(letter) && livesLeft > 0) {
                    setLivesLeft(num => num - 1)
                }
                changeAbcState(abc.map(item => !localData.includes(item.text) ? { ...item } :
                    {
                        text: item.text, state: checkLetter(item.text) ?
                            'included' : 'notIncluded'
                    }))
            }
        }
    }

    useEffect(() => {
        if (randomWord.split('').
            filter(letter => !localData.includes(letter.toUpperCase())).length === 0) {
            window.removeEventListener('keyup', () => (e) => {
                buttonPress(e.key.toUpperCase())
            }, false)

            changeIsWin(true);
        }

    }, [abc]);

    useEffect(() => {
        window.addEventListener('keyup', (e) => {
            buttonPress(e.key.toUpperCase())
        })
    })


    return (
        <div className="main" >
            <Score />
            {livesLeft <= 0 ? <GameLost /> : ''}
            {isWin ? <GameWon /> : ''}
            <HangMan data={livesLeft} winStatus={isWin} />
            <HiddenLetter data={localData} />
            <h2 className="livesLeft ">Lives left:<span> {livesLeft}</span></h2>
            <MoreButtons func={buttonPress} data={abc} livesLeft={livesLeft} />


        </div>
    )
}
