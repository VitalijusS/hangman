import hang from '/hang.png';
import img1 from '/img1.png';
import img2 from '/img2.png';
import img3 from '/img3.png';
import img4 from '/img4.png';
import img5 from '/img5.png';
import dead from '/dead.png';
import img0 from '/img0.png';
import win from '/win.png';

export function HangMan(params) {

    const imageLits = [dead, img5, img4, img3, img2, img1, img0]
    return (
        <div className='imgContainer'>
            <img src={hang} className='hangImg' alt="hang image" />
            <img className={params.winStatus ? 'hangState win' : 'hangState '}
                src={params.winStatus ? win : imageLits[params.data < 0 ? 0 : params.data]} alt="hang state img" />
        </div>

    )
}