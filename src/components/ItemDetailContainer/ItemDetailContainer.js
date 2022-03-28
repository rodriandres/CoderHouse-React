import { useEffect, useState } from "react";
import "../components.scss";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import ItemNotFound from "../Error/ItemNotFound";
import { db } from "../../services/firebase/firebase";
import { getDoc, doc } from "firebase/firestore";
import { useNotificationServices } from "../../services/notifications/NotificationsServices";

const ItemDetailContainer = ({ greeting }) =>{
    const [ product, setProduct ] = useState({});
    const { productId } = useParams();

    const setNotification = useNotificationServices();

    useEffect( ()=>{

        const docRef = doc(db, 'itemCollection', productId);
        
        getDoc(docRef)
        .then( (response)=>{
            const item = {id: response.id, ...response.data()}
            console.log(item)
            setProduct(item);
        }).catch( (e) =>{
            setNotification('error',`ERROR: ${e}`)

            // TODO: borrar console
            console.log(e)
        }
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