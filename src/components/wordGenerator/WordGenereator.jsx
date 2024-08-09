import { wordList } from "../data/words";
export const randomWord = wordGenerator();
function wordGenerator(){
    return wordList[Math.floor(Math.random() * 1000)];   
}