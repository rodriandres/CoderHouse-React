import "../components.css";
import Item from "../Item/Item";

const ItemList = ({ items }) =>{
    console.log(items)
    return (
        <ul>
            {items.map(( product ) =>(
                <Item key={product.id} itemData={product}/>
            ))}    
        </ul>
    )
}

export default ItemList;