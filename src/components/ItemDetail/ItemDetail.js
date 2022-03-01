import { useState } from "react";
import "../components.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) =>{
    const [
        buyAmount,
        setBuyAmount,
    ] = useState(0);

    const onAddHandler = (quantityToAdd) => {
        setBuyAmount(quantityToAdd)
        console.log(`Se agregaron ${quantityToAdd} productos al carrito`)
    }

    return (
        <div>
            <h3>{product.title}</h3>
            <img className="itemDetail-img" src={product.pictureUrl}/>
            {product.category && <p>Categoria: {product.category}</p>}
            {product.description && <p>Descripción: {product.description}</p>}
            {product.price && <p>Precio: {product.price}</p>}
            {product.stock && <p>Cantidad disponible: {product.stock}</p>}
            {product.price? 
            <div>
                {buyAmount > 0 ? <Link quantity={buyAmount} to={`/cart`} className="option">Ir a mi carrito</Link> : 
                <ItemCount stock={product.stock} initial={1} onAdd={onAddHandler}/>}
            </div>:
            null}
        </div>
    )
}

export default ItemDetail;