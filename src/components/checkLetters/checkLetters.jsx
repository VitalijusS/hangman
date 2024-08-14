import { randomWord } from "../wordGenerator/WordGenereator";

export function checkLetter(letter) {
    if (randomWord.toUpperCase().includes(letter)) {
        return true;
    } else {
        return false;
    }

}