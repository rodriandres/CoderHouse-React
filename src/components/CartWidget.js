import "./components.css";
import { Icon } from 'react-icons-kit'
import {cart} from 'react-icons-kit/icomoon/cart'


const CartWidget = ({ label }) =>{

    return (
        <div>
            <button>
                <Icon icon={cart}/>
                <p style={{ display: "inline-block", margin: "10px", fontFamily: "verdana", fontSize: "12px" }}> {label} </p>  
            </button>
            
        </div>
    )
}

export default CartWidget;