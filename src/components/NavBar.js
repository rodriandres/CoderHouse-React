import "./components.css";
import CartWidget from './CartWidget';

const NavBar = () =>{

    return (
        <nav className="NavBar">
            <div>
                <img className="vader" src={'./images/vader.png'} alt={`Logo`} />
                <p>Runeate Place</p>
            </div>
        
            <button className="option">Camisas</button>
            <button className="option">Camperas</button>
            <button className="option">Pantalones</button>
            <CartWidget label="10"/>
        </nav>
    )
}

export default NavBar;