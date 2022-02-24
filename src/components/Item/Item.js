
import { useEffect, useState } from "react";
import "../components.css";
// import ItemCount from "./ItemCount";

const Item = ({ itemData, routing }) =>{
    const [
        product,
        setProduct
    ] = useState({});

    // const onAddHandler = (quantity) => {
    //     console.log(`Se agregaron ${quantity} productos al carrito`)
    // }

    useEffect(()=>{
        setProduct(itemData)
        console.log(product)
    });

    return (
        <div>
        {product &&
            <div className="item">
                <p>{product.title}</p>
                <img className="itemDetail-img" src={product.pictureUrl}/>
                {/* <ItemCount stock={product.stock} initial={1} onAdd={onAddHandler}/> */}
                <button className="option" onClick={() => routing({id: product.id, path: 'detail'})}>Ver detalle</button>
            </div>
        }
        </div>
    )
}

export default Item;