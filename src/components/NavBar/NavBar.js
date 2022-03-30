import PropTypes from 'prop-types';
import "../components.scss";
import CartWidget from '../CartWidget';
import { NavLink } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../context/CartContext';
import { db } from "../../services/firebase/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useNotificationServices } from '../../services/notifications/NotificationsServices';

const NavBar = () =>{
    const { cartQuantity, setCartQuantity } = useContext(CartContext);
    const [categories, setCategories] = useState([]);

    const setNotification = useNotificationServices();

    useEffect( ()=>{
        setCartQuantity(cartQuantity);

        getDocs(collection(db, 'categories'))
        .then( (response)=>{
            const catego = response.docs.map(cat =>{
                    return {id: cat.id, ...cat.data()}
                })
            setCategories(catego);
            
        }).catch( (e) =>{ 
            setNotification('error',`ERROR: ${e}`)
        });

    }, [cartQuantity])

    return (
        <nav className="navbar">
            <div className='navbar__logo'>
                <NavLink className='navbar__navlink' to={`/`}>
                    <img className="vader" src='./images/vader.png' alt={`Logo`} />
                    <h2 className='navbar__navlink--text'>zetark</h2>
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
                {cartQuantity > 0 && <CartWidget/>}    
            </NavLink>
            
        </nav>
    )
}


NavBar.prototypes = {
    label: PropTypes.number,
}

export default NavBar;