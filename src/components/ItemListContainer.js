import { useEffect, useState } from "react";
import "./components.css";
import ItemList from "./Item/ItemList";
import { getProducts } from '../mocks/asyncmock';

const ItemListContainer = ({ greeting, routing }) =>{
    const [ products, setProducts] = useState([]);

    useEffect(() => {
        getProducts().then( (item)=>{
            setProducts(item);
        }).catch( e =>{
            console.log(e);
        });

        return (() => {
            setProducts();
        })
    }, [])

    return ( 
        <div className="div--Itemlist">
            <h1>{greeting}</h1>
            <div className="div--Itemlistcontainer">   
                <ItemList items={products} routing={routing}/>    
            </div>
            
        </div>
    )
}

export default ItemListContainer;