import PropTypes from 'prop-types';
import "../components.css";
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
        <nav className="NavBar">
            <div>
                <NavLink to={`/`}>
                    <img className="vader" src={'./images/vader.png'} alt={`Logo`} />
                    <h2>Ilum</h2>
                    <p>Look for your kyber cristal here!!</p>
                </NavLink>
            </div>
            <div>
                {categories.map(cat => 
                <NavLink key={cat.id} to={`/category/${cat.name}`} 
                    className={({ isActive }) => isActive ? 'option-active' : 'option'}>
                    {cat.name}
                </NavLink> )}
            </div>
        
            <CartWidget label="10"/>
        </nav>
    )
}


NavBar.prototypes = {
    label: PropTypes.number,
}

export default NavBar;