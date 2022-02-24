import "../components.css";
import Item from "./Item";

const ItemList = ({ items, routing }) =>{
    console.log(items)
    return (
        <ul>
            {items.map(( product )=>{
                <Item key={product.id} itemData={product} routing={routing}/>
            })}    
        </ul>
    )
}

export default ItemList;