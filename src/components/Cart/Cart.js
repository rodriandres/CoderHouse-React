import { useContext, useState } from "react";
import "../components.scss";
import CartContext from '../../context/CartContext';
import { Link } from "react-router-dom";
import { db } from "../../services/firebase/firebase";
import {   doc, getDoc, collection, getFirestore, writeBatch, addDoc, Timestamp } from "firebase/firestore";

const Cart = () =>{

    const { cart, removeItem, clearState, totalPrice } = useContext(CartContext);
    const [processingOrder, setProcessingOrder] = useState(false);
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
        
        //addDoc(collection(db, 'orders'), order).then((response)=>{ console.log(response), clearState(), setProcessingOrder(false);});
 
        // getDocs(collection(db, 'orders')).then((res)=>{
        //     const products = res.docs.map(doc =>{
        //         return {id: doc.id, ...doc.data()}
        //     })

        //     updateDoc(doc(db,'orders', products[0].id), order).then((response)=>{ 
        //         console.log(response)
        //         clearState()
        //         setProcessingOrder(false);
        //     });

        // });

        updateOrder();

    }

    const updateOrder = () =>{
        const dataBase = getFirestore();

        const batch = writeBatch(dataBase);

        const outOfStock = [];
        const order = {
            user:contact,
            items: cart,
            total: totalPrice,
            date: new Date(),
        }

        order.items.forEach(prod => {
            getDoc(doc(db, 'itemCollection', prod.product.id))
            .then((res) => {
                if(res.data().stock >= prod.quantityToAdd){
                    batch.update(doc(db, 'itemCollection', res.id), {
                        stock: res.data().stock - prod.quantityToAdd
                    });
                } else {
                    outOfStock.push({
                        id: res.id,
                        ...res.data()
                    })
                    console.log(outOfStock)
                }
            })
        });

        if(outOfStock.length === 0){
            addDoc(collection(db, 'orders'), order).then(()=>{
                batch.commit().then(()=>{
                    console.log("success")
                }).catch(e =>{
                    console.log(e)
                }).finally(()=>{
                    setProcessingOrder(false);
                });
            })
        }
        
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