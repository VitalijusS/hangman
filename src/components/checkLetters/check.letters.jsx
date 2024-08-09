import { randomWord } from "../wordGenerator/WordGenereator";
export let livesLeft = 6;
export function checkLetter(letter){
    if(randomWord.toUpperCase().includes(letter)){
        console.log(true);

        return true;
    }else{
        console.log(false);
        console.log(randomWord);
        console.log(letter);
        livesLeft--;
        console.log(livesLeft);
        
        return false;

    }

}