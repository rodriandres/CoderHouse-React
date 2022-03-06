import { useContext, useState } from "react";
import "../components.scss";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import CartContext from '../../context/CartContext';

const ItemDetail = ({ product }) =>{
    const { addItem } = useContext(CartContext);

    const [
        buyAmount,
        setBuyAmount,
    ] = useState(0);

    const onAddHandler = (quantityToAdd) => {
        addItem(product, quantityToAdd);
        setBuyAmount(quantityToAdd)
        console.log(`Se agregaron ${quantityToAdd} productos al carrito`)
    }

    return (
        <div>
            <h3>{product.title}</h3>
            <img className="itemDetail-img" src={product.pictureUrl}/>
            {product.category && <p>Category: {product.category}</p>}
            {product.description && <p>Description: {product.description}</p>}
            {product.price && <p>Price: {product.price}</p>}
            {product.stock && <p>Quantity Available: {product.stock}</p>}
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