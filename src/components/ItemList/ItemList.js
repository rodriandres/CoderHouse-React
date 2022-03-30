import "../components.scss";
import Item from "../Item/Item";

const ItemList = ({ items }) =>{
    return (
        <div className="itemListContainer__div">
            {items.map(( product ) =>(
                product.stock > 0 && <Item key={product.id} itemData={product}/>
            ))}  
        </div>  
    )
}

export default ItemList;