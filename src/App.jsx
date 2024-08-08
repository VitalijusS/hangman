import { useState } from 'react';
import { wordList } from './components/data/words';

function App() {

  return (
    <>
    <h1>Hang Man</h1>
    <p>{wordList}</p>
    </>
  )
}

export default App;
