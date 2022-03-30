import { useContext, useState } from "react";
import "../components.scss";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import CartContext from '../../context/CartContext';
import { useNotificationServices } from "../../services/notifications/NotificationsServices";

const ItemDetail = ({ product }) =>{
    const {  addItem, } = useContext(CartContext);

    const [
        buyAmount,
        setBuyAmount,
    ] = useState(0);

    const setNotification = useNotificationServices();

    const onAddHandler = (quantityToAdd) => {

        addItem(product, quantityToAdd);
        setBuyAmount(quantityToAdd)

        if(quantityToAdd > 1){
            setNotification('success',`Se agregaron ${quantityToAdd} ${product.name} al carrito`);
        }else{
            setNotification('success',`Se agregó ${quantityToAdd} ${product.name} al carrito`);
        }
    }

    return (
        <div>
            <h3>{product.name}</h3>
            <img className="itemDetail-img" src={product.pictureUrl}/>
            {product.category && <p>Category: {product.category}</p>}
            {product.description && <p>Description: {product.description}</p>}
            {product.price && <p>Price: {product.price}</p>}
            {product.stock && <p>quantity Available: {product.stock}</p>}
            {product.price? 
            <div>
                {buyAmount > 0 ? <Link quantity={buyAmount} to={`/cart`} className="option">Finish my buys</Link> : 
                <ItemCount stock={product.stock} initial={1} onAdd={onAddHandler}/>}
            </div>:
            null}
        </div>
    )
}

export default ItemDetail;