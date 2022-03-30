import { useContext, useState, useEffect } from "react";
import "../components.scss";
import CartContext from '../../context/CartContext';
import { Link } from "react-router-dom";
import { Timestamp } from "firebase/firestore";
import Form from "../Form/Form";
import FormView from "../Form/FormView";

const Cart = () =>{

    const { cart, removeItem, clearState, totalPrice, setTotalPrice, processingOrder, setProcessingOrder, updateOrder, returnProducts, totalPriceCalculator } = useContext(CartContext);
    const [ contact, setContact] = useState({
        name: '',
        phone: '',
        address: '',
        email: '',
        comment: '',
    })
    const [showForm, setShowForm] = useState(false);
    const [completeData, setCompleteData] = useState(false);

    useEffect(()=>{
        setTotalPrice(0)
        totalPriceCalculator();
    }, [])

    const confirmOrder = () =>{
        setProcessingOrder(true);

        const order = {
            buyer: contact,
            items: cart,
            total: totalPrice,
            date: Timestamp.fromDate(new Date()),
        }

        if(processingOrder){
            return <h1>La orden esta siendo procesada</h1>
        }

        updateOrder(order);

    }

    const clearCart = () => {
        returnProducts(cart);
        clearState();
    }

 


    return (
        <ul>
            {!processingOrder && cart.length > 0 && <button type="button" onClick={clearCart}>Remove all productos of my cart</button>}
            <div></div>
            <div className="cartItemsContainer">
                {cart?.length ? cart.map(( item ) =>(
                        <div key={item.product.id} className="cartItemsContainer__item">
                            <h2>{item.product.name}</h2>
                            <img className="cartItemsContainer__item--img" src={item.product.pictureUrl}/>
                            <p>Category: {item.product.category}</p>
                            <p>quantity: {item.quantityToAdd}</p>
                            <p>unit Price: {item.product.price}</p>
                            <p>Total Price: {item.product.price * item.quantityToAdd}</p>
                            <button type="button" disabled={processingOrder} onClick={()=>removeItem(item, item.quantityToAdd)}>Remove</button>
                        </div>
                    )) : 
                    <div>
                        <h1>Your Cart is empty</h1> 
                        <h1>Click the button below to</h1> 
                        <Link to={`/`} className="option">Keep buying </Link>
                    </div>
                }
            </div> 
            
            {!processingOrder && cart.length > 0 && !showForm && 
                   <div>
                        <button onClick={()=>setShowForm(true)}><h1>Continue</h1></button>
                    </div>
            }
            
            {!processingOrder && cart.length > 0 && showForm && !completeData && 
                    <Form setContact={setContact} setCompleteData={setCompleteData} />
            }

            {!processingOrder && cart.length > 0 && showForm && completeData && 
                    <FormView contact={contact} setCompleteData={setCompleteData} />
            }

            {!processingOrder && cart.length > 0 &&
                   <div>
                        <h2>Total Price: ${totalPrice}</h2>
                        <button disabled={contact.name == '' && contact.phone == '' && contact.address == '' && contact.email == '' } onClick={()=>confirmOrder()}><h1>Confirm order</h1></button>
                    </div>
            }
        </ul>
    )
}

export default Cart;