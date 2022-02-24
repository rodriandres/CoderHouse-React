import { useEffect, useState } from "react";
import "./components.css";
import ItemList from "./Item/ItemList";
import { getProducts } from '../mocks/asyncmock';
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) =>{
    const [ products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        getProducts(categoryId)
        .then( (item)=>{
            setProducts(item);
        }).catch( e =>
            console.log(e)
        );

        return (() => {
            setProducts()
        })
    }, [categoryId])

    return ( 
        <div className="div--Itemlist">
            <h1>{greeting}</h1>
            <div className="div--Itemlistcontainer">   
                <ItemList items={products}/>    
            </div>
            
        </div>
    )
}

export default ItemListContainer;