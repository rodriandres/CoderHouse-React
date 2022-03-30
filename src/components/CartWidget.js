import "./components.scss";
import { Icon } from 'react-icons-kit'
import {cart} from 'react-icons-kit/icomoon/cart'
import CartContext from '../context/CartContext';
import { useContext, useEffect } from "react";
import { NavLink } from 'react-router-dom';

const CartWidget = () =>{
    const { cartQuantity, setCartQuantity } = useContext(CartContext);

    useEffect(()=>{
        setCartQuantity(0);
    }, [])

    return (

        <NavLink className={({ isActive }) => isActive ? 'div__cart--button-active' : 'div__cart--button'} to={`/cart`}>
            <Icon icon={cart}/>
            <p className="div__cart--text"> {cartQuantity} </p>  
        </NavLink>

    )
}

export default CartWidget;