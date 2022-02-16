
import { useEffect, useState } from "react";
import "../components.css";
import ItemCount from "./ItemCount";

const Item = ({ itemData }) =>{
    const [
        product,
        setProduct
    ] = useState({});

    const onAddHandler = (quantity) => {
        console.log(`Se agregaron ${quantity} productos al carrito`)
    }

    useEffect(()=>{
        setProduct(itemData)
        console.log(product)
    });

    return (
        <div>
        {product &&
            <div>
                <p>{product.title}</p>
                <ItemCount stock={product.stock} initial={1} onAdd={onAddHandler}/>
            </div>
        }
        </div>
    )
}

export default Item;