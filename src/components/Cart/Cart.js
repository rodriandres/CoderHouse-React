import { useContext } from "react";
import "../components.scss";
import CartContext from '../../context/CartContext';

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
            
            )) : <h1>No tienes elementos en tu carrito</h1> }  
        </ul>
    )
}

export default Cart;