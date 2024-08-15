if (localStorage.getItem('winScore') === null || localStorage.getItem('loseScore') === null) {
    localStorage.setItem('winScore', 0)
    localStorage.setItem('loseScore', 0)
}
const winScore = localStorage.getItem('winScore');
const loseScore = localStorage.getItem('loseScore');
export function Score() {
    return (
        <h2 className="score">Wins: {winScore / 2} Deaths:{loseScore / 2}</h2>

    )
}