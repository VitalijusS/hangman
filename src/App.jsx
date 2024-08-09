import { Buttons } from './components/buttons/buttons';
import { HangMan } from './components/hangman/HangMan';
import { HiddenLetter } from './components/hiddenLetter/Hiddenletter';
import { randomWord } from './components/wordGenerator/WordGenereator';
import { Header } from './header/Header';

function App() {

  return (
    <>
      <Header />
      <HangMan />
      <HiddenLetter />
      <p>{randomWord}</p>
      <Buttons />
    </>
  )
}

export default App;
