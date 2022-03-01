import { useEffect, useState } from "react";
import "../components.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProduct } from '../../mocks/asyncmock';
import { useParams } from "react-router-dom";
import ItemNotFound from "../Error/ItemNotFound";

const ItemDetailContainer = ({ greeting }) =>{
    const [ product, setProduct ] = useState({});
    const { productId } = useParams();

    useEffect( ()=>{
        getProduct(productId)
        .then( (item)=>{
            setProduct(item);
        }).catch( e =>
            console.log(e)
        );

        return (() => {
            setProduct()
        })
    }, [productId])

    return ( 
        <div className="div--Itemlist">
            <h1>{greeting}</h1>
            <div className="div--Itemlistcontainer">
                {product? <ItemDetail product={product}/> : <ItemNotFound itemId={productId} /> }
            </div>
        </div>
    )
}

export default ItemDetailContainer;