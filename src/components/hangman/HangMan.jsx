import hang from '../img/hang.png';
import img1 from '../img/1.png';
import img2 from '../img/2.png';
import img3 from '../img/3.png';
import img4 from '../img/4.png';
import img5 from '../img/5.png';
import dead from '../img/dead.png';
import img0 from '../img/0.png';
import win from '../img/win.png';

export function HangMan(params){

    const imageLits = [dead, img5, img4, img3, img2, img1,img0]
    return (
        <div className='imgContainer'>
            <img src={hang} className='hangImg' alt="hang image" />
            <img className={params.winStatus? 'hangState win':'hangState '} src={params.winStatus?win:imageLits[params.data]} alt="hang state img" />
        </div>

    )
}