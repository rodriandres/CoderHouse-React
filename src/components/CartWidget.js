import "./components.scss";
import { Icon } from 'react-icons-kit'
import {cart} from 'react-icons-kit/icomoon/cart'
import CartContext from '../context/CartContext';
import { useContext, useEffect } from "react";

const CartWidget = () =>{
    const { cartQuantity, setCartQuantity } = useContext(CartContext);

    useEffect(()=>{
        setCartQuantity(0);
    }, [])

    return (
        <div>
            <button className="div__cart--button">
                <Icon icon={cart}/>
                <p className="div__cart--text"> {cartQuantity} </p>  
            </button>
            
        </div>
    )
}

export default CartWidget;