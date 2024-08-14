import { wordList } from "../data/words";
export const randomWord = wordGenerator();
function wordGenerator(){
    const word = wordList[Math.floor(Math.random() * 1000)];
    if(word.length > 3 && word.length< 11){
        return word;
    }else{
        return wordGenerator();
    }

}