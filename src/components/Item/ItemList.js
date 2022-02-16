import "../components.css";
import Item from "./Item";
import { useEffect, useState } from "react";


const ItemList = ({ item }) =>{
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
            <Item itemData={product}/>
        </div>
    )
}

export default ItemList;