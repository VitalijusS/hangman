import { Buttons } from './components/buttons/buttons';
import { randomWord } from './components/wordGenerator/WordGenereator';
function App() {

  return (
    <>      
      <Buttons />
      <p>{randomWord}</p>
    </>
  )
}

export default App;
