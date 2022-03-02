import { useEffect, useState } from "react";
import "../components.scss";
import ItemList from "../ItemList/ItemList";
import { getProducts } from '../../mocks/asyncmock';
import { useParams } from "react-router-dom";
import CategoryNotAvariable from '../Error/CategoryNotAvariable';

const ItemListContainer = ({ greeting }) =>{
    const [ products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        getProducts(categoryId)
        .then( (item)=>{
            setProducts(item);
        }).catch( (e) =>
            console.log(e)
        );

        return (() => {
            setProducts()
        })
    }, [categoryId])

    return ( 
        <div className="itemListContainer">
            <h1>{greeting}</h1>      
            {products?.length ? <ItemList items={products}/> :  <CategoryNotAvariable category={categoryId}/> }  
        
        </div>
    )
}

export default ItemListContainer;