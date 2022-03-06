import { useContext } from "react";
import "../components.scss";
import CartContext from '../../context/CartContext';
import { Link } from "react-router-dom";

const Cart = () =>{

    const { cart, removeItem, clearState } = useContext(CartContext);
    
    return (
        <ul>
            {cart.length > 0 && <button type="button" onClick={()=>clearState()}>Remove all productos of my cart</button>}
            {cart?.length ? cart.map(( item ) =>(
                    <div key={item.product.id}>
                        <h2>{item.product.title}</h2>
                        <img className="itemDetail-img" src={item.product.pictureUrl}/>
                        <p>Category: {item.product.category}</p>
                        <p>Quantity: {item.quantityToAdd}</p>
                        <p>Unit Price: {item.product.price}</p>
                        <p>Total Price: {item.product.price * item.quantityToAdd}</p>
                        <button type="button" onClick={()=>removeItem(item.product.id)}>Remove</button>
                    </div>
            )) : 
            <div>
                <h1>Your Cart is empty</h1> 
                <h1>Click the button below to</h1> 
                <Link to={`/`} className="option">Keep buying </Link>
            </div> }  
            {cart.length > 0 &&
                   <div>
                        <button onClick={() => console.log("COMPRASTE TODO!")}><h1>Buy it!</h1></button>
                    </div>
            }
        </ul>
    )
}

export default Cart;