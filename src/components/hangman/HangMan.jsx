import hang from '/hang.png';
import img1 from '/1.png';
import img2 from '/2.png';
import img3 from '/3.png';
import img4 from '/4.png';
import img5 from '/5.png';
import img6 from '/6.png';
import dead from '/dead.png';
import win from '/win.png';


export function HangMan(){
    const imageLits = [img1, img2, img3, img4, img5, img6, win, dead]
    const todo = 2;
    return (
        <div className='test2'>
            <div className='imgContainer'>
                <img src={hang} className='hangImg' alt="hang image" />
                <img className='hangState' src={imageLits[todo]} alt="hang state img" />

            </div>

        </div>
    )
}