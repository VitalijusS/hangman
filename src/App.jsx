import { Buttons } from './components/buttons/buttons';
import { HangMan } from './components/hangman/HangMan';
import { randomWord } from './components/wordGenerator/WordGenereator';
import { Header } from './header/Header';

function App() {

  return (
    <>
      <Header />
      <HangMan />
      <p>{randomWord}</p>
      <Buttons />
    </>
  )
}

export default App;
