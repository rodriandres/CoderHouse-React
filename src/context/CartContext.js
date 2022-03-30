import { createContext, useState, useEffect } from 'react'
import { db } from "../services/firebase/firebase";
import { doc, updateDoc, getDoc, collection, addDoc } from "firebase/firestore";
import { useNotificationServices } from '../services/notifications/NotificationsServices';

export const Context = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [ totalPrice, setTotalPrice, ] = useState(0);
    const [cartQuantity, setCartQuantity] = useState(0);
    const [processingOrder, setProcessingOrder] = useState(false);

    const setNotification = useNotificationServices();

    useEffect(()=>{
        setTotalPrice(0)
        totalPriceCalculator();
    }, [cart.length])

    const updateItemQuantity = (productId, quantityToAdd) => {
        const cartItems = cart.map(p => p.product.id === productId ? { ...p, quantityToAdd: p.quantityToAdd + quantityToAdd } : p );
        setCart(cartItems)
        setCartQuantity(cartQuantity + quantityToAdd);
    }

    const updateStockFromStore = async (product, quantity, operation) => {
        const docRef = await getDoc(doc(db, 'itemCollection', product.id));
        if(operation === 'add'){
            let item = { ...product, stock: docRef.data().stock + quantity}
            await updateDoc(doc(db, 'itemCollection', product.id), item)   
        }else{
            let item = { ...product, stock: docRef.data().stock - quantity}
            await updateDoc(doc(db, 'itemCollection', product.id), item)   
        }
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
        updateStockFromStore(product, quantityToAdd, 'substract')
    })

    const removeItem =((item, quantityToRemove) => {
        if(isInCart(item.product.id)){

            const cartItems = cart.filter(p => p.product.id !== item.product.id);
            let quantity = cart.find(p => p.product.id == item.product.id).quantityToAdd;
            setCart(cartItems)
            setCartQuantity(cartQuantity - quantity);
            updateStockFromStore( item.product , quantityToRemove, 'add') 
        }else {
            setNotification('error',`Your cart does not have this product`);
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
        let newPrice = 0;
        cart.map((item) => {
            newPrice += item.product.price * item.quantityToAdd;
        })
        setTotalPrice(newPrice);
    }



    const updateOrder = (order) =>{

        order.items.forEach(prod => {
            getDoc(doc(db, 'itemCollection', prod.product.id))
            .then((res) => {
                if(res.data().stock >= prod.quantityToAdd){
                    addDoc(collection(db, 'orders'), order).then(({id})=>{
                        clearState();
                        setNotification('success',`Great! Your buy id is: ${id}`);
                        setProcessingOrder(false);
                })
                } else {
                    setNotification('error',`Error! There is not such of quantity for that item`);
                }
            })
        });
    }

    const returnProducts = (cart) => {
        cart.forEach(prod => {
            updateStockFromStore(prod.product, prod.quantityToAdd, 'add')  
        })
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
            returnProducts,
            }}>
            {children}
        </Context.Provider>
    )
}

export default Context;
