import { randomWord } from "../wordGenerator/WordGenereator";

export function HiddenLetter(){

    
    return (
        <div className="hiddenLetterContainer">
            {randomWord.split('').map((item,index)=><div key={index} className="hiddenLetter">a</div>)}
        </div>
    )

}