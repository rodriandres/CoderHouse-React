import "./components.css";
import ItemCount from "./ItemCount/ItemCount";

const ItemListContainer = ({ greeting }) =>{

    return (
        <div className="div--Itemlistcontainer">
            <h1>{greeting}</h1>
            <ItemCount stock={5} initial={5}/>
        </div>

    )
}

export default ItemListContainer;