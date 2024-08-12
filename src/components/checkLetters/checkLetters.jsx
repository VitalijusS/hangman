import { randomWord } from "../wordGenerator/WordGenereator";
export let livesLeft = 6;
export function checkLetter(letter){
    if(randomWord.toUpperCase().includes(letter)){
        return true;
    }else{
        livesLeft--;
        return false;

    }

}