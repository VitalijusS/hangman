import { checkLetter, livesLeft } from "../checkLetters/checkLetters";
import { randomWord } from "../wordGenerator/WordGenereator";
import { HiddenLetter } from "../hiddenLetter/Hiddenletter";
import { HangMan } from "../hangman/HangMan";
import { GameLost } from "../gameLost/GameLost";
import { GameWon } from "../gameWon/GameWon";
import { Score } from "../score/Score";
import { MoreButtons } from "../moreButtons/MoreButtons";

localStorage.setItem('pressedLetters', JSON.stringify([]))
const abc = [{ text: 'Q', state: '' }, { text: 'W', state: '' }, { text: 'E', state: '' }, { text: 'R', state: '' },
{ text: 'T', state: '' }, { text: 'Y', state: '' }, { text: 'U', state: '' }, { text: 'I', state: '' },
{ text: 'O', state: '' }, { text: 'P', state: '' }, { text: 'A', state: '' }, { text: 'S', state: '' },
{ text: 'D', state: '' }, { text: 'F', state: '' }, { text: 'G', state: '' }, { text: 'H', state: '' },
{ text: 'J', state: '' }, { text: 'K', state: '' }, { text: 'L', state: '' }, { text: 'Z', state: '' },
{ text: 'X', state: '' }, { text: 'C', state: '' }, { text: 'V', state: '' }, { text: 'B', state: '' },
{ text: 'N', state: '' }, { text: 'M', state: '' },];

const localData = [];
if (localStorage.getItem('score') === null) {
    localStorage.setItem('score', JSON.stringify([0, 0]))
}

let isWin = false;
export function Buttons() {
    function handleKeyDown(event) {
        if ('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(event.key)) {
            // buttonPress({target:{innerText:event.key}});
            console.log(event.key);
        }
    }

    function buttonPress(e) {
        if (livesLeft > 0 && !isWin) {
            const letter = e.target.innerText;
            localData.push(letter);
            localStorage.setItem('pressedLetters', JSON.stringify(localData))
            abc.map(item => item.text === letter ?
                item.state = checkLetter(letter) ?
                    'included' : 'notIncluded' : item)

            checkLetter(letter);
            checkIfWin();
        }
    }
    function checkIfWin() {
        if (randomWord.split('').
            filter(letter => !localData.includes(letter.toLocaleUpperCase())).length === 0) {
            isWin = true;
        }
    }

    return (
        <div onKeyDown={handleKeyDown}>
            <Score />
            {livesLeft === 0 ? <GameLost /> : ''}
            {isWin ? <GameWon /> : ''}
            <HangMan data={livesLeft} winStatus={isWin} />
            <HiddenLetter data={localData} />
            <h2 className="livesLeft ">Lives left:<span> {livesLeft}</span></h2>
            <MoreButtons data={abc} func={buttonPress} />

        </div>
    )
}
