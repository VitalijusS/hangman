import { randomWord } from "../wordGenerator/WordGenereator";

export function checkLetter(letter){
    if(randomWord.toUpperCase().includes(letter)){
        console.log(true);
        return true;
    }else{
        console.log(false);
        console.log(randomWord);
        console.log(letter);
        return false;

    }

}