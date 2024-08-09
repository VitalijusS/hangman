import { randomWord } from "../wordGenerator/WordGenereator";

export function HiddenLetter(params){
    console.log(params);
    
    return (
        <div className="hiddenLetterContainer">
            {randomWord.split('').map((item,index)=>
                <div key={index} className="hiddenLetter">
                    {params.data.includes(item.toUpperCase())?
                    item:''}
                </div>)}
        </div>
    )

}