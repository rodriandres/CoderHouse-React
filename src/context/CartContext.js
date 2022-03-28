import { createContext, useState, useEffect } from 'react'
import { db } from "../services/firebase/firebase";
import { doc, getDoc, collection, getFirestore, writeBatch, addDoc } from "firebase/firestore";
import { useNotificationServices } from '../services/notifications/NotificationsServices';

export const Context = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [ totalPrice, setTotalPrice, ] = useState(0);
    const [cartQuantity, setCartQuantity] = useState(0);
    const [processingOrder, setProcessingOrder] = useState(false);

    const setNotification = useNotificationServices();

    useEffect(()=>{
        totalPriceCalculator();
    }, [cart.length])
    
    console.log(cart)

    const updateItemQuantity = (productId, quantityToAdd) => {
        const cartItems = cart.map(p => p.product.id === productId ? { ...p, quantityToAdd: p.quantityToAdd + quantityToAdd } : p );
        setCart(cartItems)
        setCartQuantity(cartQuantity + quantityToAdd);
    }

    const addItem =((product, quantityToAdd) => {
        if(isInCart(product.id)){
            updateItemQuantity(product.id, quantityToAdd);
        } else {
            let cartList = cart;
            cartList.push({product, quantityToAdd})
            setCart(cartList);
            setCartQuantity(cartQuantity + quantityToAdd);
        }
    })

    const removeItem =((productIdToRemove) => {
        if(isInCart(productIdToRemove)){

            const cartItems = cart.filter(p => p.product.id !== productIdToRemove);
            let quantity = cart.find(p => p.product.id == productIdToRemove).quantityToAdd;
            console.log(quantity)
            setCart(cartItems)
            setCartQuantity(cartQuantity - quantity);
        }else {
            setNotification('error',`El producto no esta en tu carrito`);
        }
    })

    const isInCart = (productId) => {
        return cart.some(p => p.product.id === productId)
    }

    const clearState = () => {
        setCart([]);
        setCartQuantity(0);
        setNotification('success',`You clean your cart`);
    }

    const totalPriceCalculator = () => {
        cart.map(( item ) =>(
            setTotalPrice(totalPrice + item.product.price * item.quantityToAdd)
        ));
    }

    const updateOrder = (order) =>{
        const dataBase = getFirestore();

        const batch = writeBatch(dataBase);

        const outOfStock = [];

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
            addDoc(collection(db, 'orders'), order).then(({id})=>{
                batch.commit().then(()=>{
                    clearState();
                    setNotification('success',`Great! Your buy id is: ${id}`);
                    // TODO: borrar console
                    console.log(`success, your buy id is: ${id}`)

                }).catch(e =>{
                    setNotification('error',`ERROR: ${e}`);

                    console.log(e)
                }).finally(()=>{
                    setProcessingOrder(false);
                });
            })
        }
        
    }

    return (
        <Context.Provider value={{
            cart,
            cartQuantity,
            totalPrice,
            processingOrder,
            setProcessingOrder,
            setCartQuantity,
            addItem,
            removeItem,
            clearState,
            totalPriceCalculator,
            updateOrder,
            }}>
            {children}
        </Context.Provider>
    )
}

export default Context;
