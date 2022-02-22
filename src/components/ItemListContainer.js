import { useEffect, useState } from "react";
import "./components.css";
import ItemList from "./Item/ItemList";
import { getProducts } from '../mocks/asyncmock';

const ItemListContainer = ({ greeting }) =>{
    const [
        products,
        setProducts
    ] = useState([]);

    useEffect( ()=>{
        getProducts()
        .then( (products)=>{
            setProducts(products);
        });
    }, [])

    console.log(products);

    return ( 
        <div className="div--Itemlistcontainer">
            <h1>{greeting}</h1>
            <ul>
            {products.map(( product )=>{
                return <li key={product.id}><ItemList item={product}/></li>
            })}
            </ul>
        </div>
    )
}

export default ItemListContainer;