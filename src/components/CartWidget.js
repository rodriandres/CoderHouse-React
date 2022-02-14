import "./components.css";
import { Icon } from 'react-icons-kit'
import {cart} from 'react-icons-kit/icomoon/cart'


const CartWidget = ({ label }) =>{

    return (
        <div>
            <button className="div__cart--button">
                <Icon icon={cart}/>
                <p className="div__cart--text"> {label} </p>  
            </button>
            
        </div>
    )
}

export default CartWidget;