import { useEffect, useState } from "react";
import "./components.css";
import ItemDetail from "./Item/ItemDetail";
import { getItem } from '../mocks/asyncmock';

const ItemDetailContainer = ({ greeting, routing }) =>{
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

    return ( 
        <div className="div--Itemlist">
            <h1>{greeting}</h1>
            <div className="div--Itemlistcontainer">
                <ItemDetail item={item} routing={routing}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer;