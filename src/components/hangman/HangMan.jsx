import hang from '/hang.png';
import img1 from '/1.png';
import img2 from '/2.png';
import img3 from '/3.png';
import img4 from '/4.png';
import img5 from '/5.png';
import dead from '/dead.png';
import img0 from '/0.png';
import win from '/win.png';
export let hangManLives = 0;

export function HangMan(params){

    const imageLits = [dead, img5, img4, img3, img2, img1,img0, win]
    return (
        <div className='imgContainer'>
            <img src={hang} className='hangImg' alt="hang image" />
            <img className='hangState' src={imageLits[params.data]} alt="hang state img" />
        </div>

    )
}