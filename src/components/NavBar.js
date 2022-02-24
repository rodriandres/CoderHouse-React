import PropTypes from 'prop-types';
import "./components.css";
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () =>{

    return (
        <nav className="NavBar">
            <div>
                <img className="vader" src={'./images/vader.png'} alt={`Logo`} />
                <h2>Ilum</h2>
                <p>Look for your kyber cristal here!!</p>
            </div>
        
            <NavLink className={({ isActive }) => isActive ? 'option-active' : 'option'} to={'/category/Cristales'}>Cristales</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'option-active' : 'option'} to={'/category/Monturas'}>Monturas</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'option-active' : 'option'} to={'/category/Accesorios'}>Accesorios</NavLink>
            <CartWidget label="10"/>
        </nav>
    )
}


NavBar.prototypes = {
    label: PropTypes.number,
}

export default NavBar;