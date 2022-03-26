import "../components.scss";
import Item from "../Item/Item";

const ItemList = ({ items }) =>{
    console.log(items)
    return (
        <div className="itemListContainer__div">
            {items.map(( product ) =>(
                <Item key={product.id} itemData={product}/>
            ))}  
        </div>  
    )
}

export default ItemList;