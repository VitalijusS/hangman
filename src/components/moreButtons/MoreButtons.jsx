export function MoreButtons(params){
    const func = params.func 
    console.log(params.data);
    
    return (
        <div className="abcButtons" >
            {params.data.map(item => <button key={item.text} onClick={func}
                data-state={item.state}>{item.text}</button>)}
        </div>
    )
}