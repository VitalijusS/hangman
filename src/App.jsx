import { Buttons } from './components/buttons/buttons';
import { randomWord } from './components/wordGenerator/WordGenereator';
import { Header } from './header/Header';

function App() {

  return (
    <>
      <Header />
      <p>{randomWord}</p>
      <Buttons />
    </>
  )
}

export default App;
