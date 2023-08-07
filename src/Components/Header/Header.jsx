
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png'
import './Header.css'

const Header = () => {
    return (
        <header>
            <nav>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
                <div className='menu'>
                <ul className='main-menu'>
                    <li className='line'><Link className='angry' to="/">Shop</Link></li>
                    <li className='line'><Link className='angry' to="/order">Order</Link></li>
                    <li className='line'><Link className='angry' to="/inventory">Inventory</Link></li>
                    <li className='line'><Link className='angry' to="/about">About</Link></li>
                </ul>
                <button className='menu-bar' onClick={Toggler}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg></button>
                </div>
                    
           
            </nav>
        </header>
    );
};


const Toggler = () => {
    let nav = document.querySelector('.main-menu'); //getElementsByClassName oitai but loop diye dhora lagto ha any
    /*
    let nav = document.getElementsByClassName('main-menu'); jodi className diye kora hoto class holo multiple and tag ow same, but id hole element ar loop lagtona and ekta class k dhorar jonno id diyew dhora jaito ba querySelector diye
    for (let i=0; i < nav.length; i++){ =< or => shoman mane shonkhar jonno use kora hoy
        if (nav[i].style.display == 'none') == / === condition ei 2ta
        {
            nav[i].style.display = 'block'; body condition er// are vai product er kaj eta na eta i mane index, ar class gulo shei index e store hobe jehetu className diye call kora hoyeche; class k dhorbe karon class always 1 er odhik
        } else {
            nav[i].style.display = 'none' eta nav class // loop chalale prottekbar index er vitorer element k call korte hobe 
        }
        amara media query te dichi je 992 pixel e gele menu ta hide hoye jabe and button ta show hobe mane display none and block;
        ebar onclick e toggle name ekta function nilam jeta click korle jodi menu er style display == 'none' hoy tahole sheta block hoye jabe ar jodi block thake taile none hoye jabe ha jeta amra jQuery te toggle diye use kortam slideToggle() but sheta ekhon amra nijera banailam  js er maddhome
        na eta react na, react to jsut component er kaj kora but ekhane if else use korchi eta only javaScript ei
    }
   // class er loop er jonno for of use kora jabena
   shob niom ekoi je kono jagatei class k dhorar jonno loop lagbe ar ekta single class k dhorar jonno queryselector (class and tag) lagbe je ta na but easy hoy loop er jhamela thakena short cut arki
    */
    if (nav.style.display == 'none')// condition eta ( 2 shoman mane holo je nave er style e display = 'block'/block ache kina ar 3 ta shoman dile exact string er block ba direct block thake kina) exact block mane '' string er vitor ba number type ba boolean type data, == dile number thakuk ba string thakuk ekoi kaj korbe but === validity er jonno account er khetre lagbe je === exact oitai lagbe ha jaite email ta exact email ei thake naile error dibe
    {// body eta (ekta = thakle define kora hobe like eta = eta hoye jabe ha)
        nav.style.display = 'block';
    } 
    else {// default condition
        nav.style.display = 'none';
    }
}


export default Header;