import { useContext, useState } from "react";
import "../components.scss";
import CartContext from '../../context/CartContext';
import { Link } from "react-router-dom";
import { Timestamp } from "firebase/firestore";

const Cart = () =>{

    const { cart, removeItem, clearState, totalPrice, processingOrder, setProcessingOrder, updateOrder } = useContext(CartContext);
    const [ contact, setContact] = useState({
        name: '',
        phone: '',
        address: '',
        email: '',
        comment: '',
    })

    const confirmOrder = () =>{
        setProcessingOrder(true);

        setContact({    
            name: 'rodri',
            phone: '1125262134',
            address: 'guatemala 23',
            email: 'rodriguatemala@hotmail.com',
            comment: 'ALTOS PRODUCTOS ME LLEVOO',
        })

        const order = {
            user: contact,
            items: cart,
            total: totalPrice,
            date: Timestamp.fromDate(new Date()),
        }

        if(processingOrder){
            return <h1>La orden esta siendo procesada</h1>
        }

        console.log(order);

        updateOrder(order);

    }

 


    return (
        <ul>
            {!processingOrder && cart.length > 0 && <button type="button" onClick={()=>clearState()}>Remove all productos of my cart</button>}
            {cart?.length ? cart.map(( item ) =>(
                    <div key={item.product.id}>
                        <h2>{item.product.name}</h2>
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
            {!processingOrder && cart.length > 0 &&
                   <div>
                        <h2>Total Price: ${totalPrice}</h2>
                        <button onClick={()=>confirmOrder()}><h1>Confirm Order</h1></button>
                    </div>
            }
        </ul>
    )
}

export default Cart;