import { useEffect, useState } from "react";
import "../components.scss";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import ItemNotFound from "../Error/ItemNotFound";
import { getProduct } from "../../services/firebase/firebase";
import { useNotificationServices } from "../../services/notifications/NotificationsServices";

const ItemDetailContainer = ({ title }) =>{
    const [ product, setProduct ] = useState({});
    const { productId } = useParams();

    const setNotification = useNotificationServices();

    useEffect( ()=>{
        getProduct(productId)
        .then( (response)=>{
            setProduct(response);
        }).catch( (e) =>{
            setNotification('error',`ERROR: ${e}`)
        })

        return (() => {
            setProduct()
        })
    }, [productId])

    return ( 
        <div className="div__itemlist">
            <h1>{title}</h1>
            <div className="div__itemlistcontainer">
                {product? <ItemDetail product={product}/> : <ItemNotFound itemId={productId} /> }
            </div>
        </div>
    )
}

export default ItemDetailContainer;