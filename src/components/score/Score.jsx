if (localStorage.getItem('score') === null) {
    localStorage.setItem('score', JSON.stringify([0, 0]))
}
const score = JSON.parse(localStorage.getItem('score'));
export function Score() {
    return (
        <h2 className="score">Wins: {score[0] / 2} Deaths:{score[1] / 2}</h2>
    )
}