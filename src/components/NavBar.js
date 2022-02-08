import "./components.css";

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
        </nav>
    )
}

export default NavBar;