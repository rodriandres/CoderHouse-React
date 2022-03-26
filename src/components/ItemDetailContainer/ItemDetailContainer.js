import { useEffect, useState } from "react";
import "../components.scss";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import ItemNotFound from "../Error/ItemNotFound";
import { db } from "../../services/firebase/firebase";
import { getDoc, doc } from "firebase/firestore";

const ItemDetailContainer = ({ greeting }) =>{
    const [ product, setProduct ] = useState({});
    const { productId } = useParams();

    useEffect( ()=>{

        const docRef = doc(db, 'itemCollection', productId);
        
        getDoc(docRef)
        .then( (response)=>{
            const item = {id: response.id, ...response.data()}
            console.log(item)
            setProduct(item);
        }).catch( (e) =>
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