import { useEffect, useState } from "react";
import "./components.css";
import ItemDetail from "./Item/ItemDetail";
import { getItem } from '../mocks/asyncmock';

const ItemDetailContainer = ({ greeting }) =>{
    const [
        item,
        setItem
    ] = useState([]);

    useEffect( ()=>{
        getItem()
        .then( (product)=>{
            setItem(product);
        });
    }, [])

    console.log(item);

    return ( 
        <div className="div--Itemlistcontainer">
            <h1>{greeting}</h1>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer;