import PropTypes from 'prop-types';
import "../components.scss";
import CartWidget from '../CartWidget';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCategories } from '../../mocks/asyncmock';

const NavBar = () =>{
    const [categories, setCategories] = useState([]);

    useEffect( ()=>{
        getCategories()
        .then( (catego)=>{
            setCategories(catego);
        }).catch( e =>
            console.log(e)
        );

    }, [])

    return (
        <nav className="navbar">
            <div className='navbar__logo'>
                <NavLink className='navbar__navlink' to={`/`}>
                    <img className="vader" src={'./images/vader.png'} alt={`Logo`} />
                    <h2 className='navbar__navlink--text'>Zetark</h2>
                    <p className='navbar__navlink--text'>Your far far away armery!!</p>
                </NavLink>
            </div>
            <div>
                {categories.map(cat => 
                <NavLink key={cat.id} to={`/category/${cat.name}`} 
                    className={({ isActive }) => isActive ? 'option-active' : 'option'}>
                    {cat.name}
                </NavLink> )}
            </div>
            <NavLink to={`/cart`}>
                <CartWidget/>    
            </NavLink>
            
        </nav>
    )
}


NavBar.prototypes = {
    label: PropTypes.number,
}

export default NavBar;