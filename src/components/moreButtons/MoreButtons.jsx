export function MoreButtons(params) {
    const func = params.func
    return (
        <div className="abcButtons" >
            {params.data.map((item) => <button key={item.text} onClick={func}
                data-state={item.state}>{item.text}</button>)}
        </div>
    )
}