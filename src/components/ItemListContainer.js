import { useEffect, useState } from "react";
import "./components.css";
import ItemList from "./Item/ItemList";

const products = [
    {id: 1, title: `Cristal Azul`, price: 500, pictureUrl: `hhtp.loquesea`, stock: 5, description: `Para guerreros`},
    {id: 2, title: `Cristal Rojo`, price: 500, pictureUrl: `hhtp.loquesea`, stock: 2, description: `Para siths`},
    {id: 3, title: `Cristal Violeta`, price: 350, pictureUrl: `hhtp.loquesea`, stock: 6, description: `Para Para mitad guerreros mitad sabiondos de la fuerza`},
    {id: 4, title: `Cristal Verde`, price: 450, pictureUrl: `hhtp.loquesea`, stock: 1, description: `Para personas como mayor compresion y sabiduria de la fuerza`},
]

const getProducts = () => {
    return new Promise((res) =>{
        setTimeout(() => {
            res(products);
        }, 2000);
    })
}

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