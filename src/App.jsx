import { checkLetter } from "./components/checkLetters/checkLetters";
import { randomWord } from "./components/wordGenerator/WordGenereator";
import { HiddenLetter } from "./components/hiddenLetter/Hiddenletter";
import { HangMan } from "./components/hangman/HangMan";
import { GameLost } from "./components/gameLost/GameLost";
import { GameWon } from "./components/gameWon/GameWon";
import { Score } from "./components/score/Score";
import { Buttons } from "./components/buttons/Buttons";
import { useEffect, useState } from "react";

localStorage.setItem('pressedLetters', JSON.stringify([]));
const localData = [];

function App() {
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
      letter = e;
    } else {
      letter = e.target.innerText;
    }
    if ('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(letter)) {
      if (livesLeft > 0 && !isWin && !localData.includes(letter)) {
        localStorage.setItem('pressedLetters', JSON.stringify(localData))
        if (!checkLetter(letter) && livesLeft > 0) {
          setLivesLeft(num => num - 1)
        }
        localData.push(letter);
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
      changeIsWin(true);
    }
  }, [abc]);

  useEffect(() => {
    function key(e) {
      buttonPress(e.key.toUpperCase())
    }
    window.addEventListener('keyup', key);
    return () => {
      window.removeEventListener('keyup', key);
    }
  })

  return (
    <div >
      <Score />
      {livesLeft <= 0 ? <GameLost /> : ''}
      {isWin ? <GameWon /> : ''}
      <HangMan data={livesLeft} winStatus={isWin} />
      <HiddenLetter data={localData} />
      <h2 className="livesLeft ">Lives left:<span> {livesLeft}</span></h2>
      <Buttons func={buttonPress} data={abc} livesLeft={livesLeft} />
    </div>
  )
}

export default App;