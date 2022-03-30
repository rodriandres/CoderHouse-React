import { useEffect, useState } from "react";
import "../components.scss";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import CategoryNotAvariable from '../Error/CategoryNotAvariable';
import { getsProducts } from "../../services/firebase/firebase";
import { useNotificationServices } from "../../services/notifications/NotificationsServices";

const ItemListContainer = ({ title }) =>{
    const [ products, setProducts] = useState([]);
    const { categoryId } = useParams();

    const setNotification = useNotificationServices();

    useEffect(() => {
        // TODO agregar el loading en esta linea

        getsProducts(categoryId).then((response)=>{
            setProducts(response)
        }).catch( (e) =>{
            setNotification('error',`ERROR: ${e}`)
        })

        return (() => {
            setProducts()
        })
    }, [categoryId])

    return ( 
        <div className="itemListContainer">
            <h1>{title}</h1>      
            {products?.length ? <ItemList items={products}/> :  <CategoryNotAvariable category={categoryId}/> }  
        
        </div>
    )
}

export default ItemListContainer;