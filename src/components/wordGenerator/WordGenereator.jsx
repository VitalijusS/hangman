import { wordList } from "../data/words";

export function WordGenerator(){
    const randomWord = wordList[Math.floor(Math.random() * 1000)];   
    return <p>{randomWord}</p> ;
}