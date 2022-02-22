import "../components.css";
import { useEffect, useState } from "react";

const ItemDetail = ({ item }) =>{
    const [
        product,
        setProduct
    ] = useState({});

    useEffect(()=>{
        setProduct(item)
        console.log(product)
    });

    return (
        <div>
            <h3>{product.title}</h3>
            <img href={product.pictureUrl}/>
            <img href="../../../public/images/cristal_azul.jpg"/>
            <p>{product.price}</p>
        </div>
    )
}

export default ItemDetail;