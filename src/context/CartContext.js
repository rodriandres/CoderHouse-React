import { createContext, useState } from 'react'

export const Context = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartQuantity, setCartQuantity] = useState(0);


    console.log(cart)

    const addItem =((product, quantityToAdd) => {
        if(isInCart(product.id)){
            console.log("El producto ya esta en tu carrito");
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
            console.log("El producto no en tu carrito");
        }
    })

    const isInCart = (productId) => {
        return cart.some(p => p.product.id === productId)
    }

    const clearState = () => {
        setCart([]);
        setCartQuantity(0);
        console.log("You clean your cart");
    }

    return (
        <Context.Provider value={{
            cart,
            cartQuantity,
            setCartQuantity,
            addItem,
            removeItem,
            clearState,
            }}>
            {children}
        </Context.Provider>
    )
}

export default Context;
