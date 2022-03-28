import { useEffect, useState } from "react";
import "../components.scss";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import CategoryNotAvariable from '../Error/CategoryNotAvariable';
import { db } from "../../services/firebase/firebase";
import { getDocs, collection, query, where } from "firebase/firestore";
import { useNotificationServices } from "../../services/notifications/NotificationsServices";

const ItemListContainer = ({ greeting }) =>{
    const [ products, setProducts] = useState([]);
    const { categoryId } = useParams();

    const setNotification = useNotificationServices();

    useEffect(() => {

        const collectionRef = categoryId? 
            query(collection(db, 'itemCollection'), where('category', '==', categoryId)) :
            collection(db, 'itemCollection')

        getDocs(collectionRef)
        .then( (response)=>{
            const products = response.docs.map(doc =>{
                    return {id: doc.id, ...doc.data()}
                })
            setProducts(products);
        }).catch( (e) =>{
            setNotification('error',`ERROR: ${e}`)

            // TODO: borrar console
            console.log(e)}
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