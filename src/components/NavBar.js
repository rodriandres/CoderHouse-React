import PropTypes from 'prop-types';
import "./components.css";
import CartWidget from './CartWidget';

const NavBar = () =>{

    return (
        <nav className="NavBar">
            <div>
                <img className="vader" src={'./images/vader.png'} alt={`Logo`} />
                <h2>Ilum</h2>
                <p>Look for your kyber cristal here!!</p>
            </div>
        
            <button className="option">Cristales</button>
            <button className="option">Monturas</button>
            <button className="option">Accesorios</button>
            <CartWidget label="10"/>
        </nav>
    )
}


NavBar.prototypes = {
    label: PropTypes.number,
}

export default NavBar;