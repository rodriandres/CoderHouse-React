import "../components.css";
import { Link } from "react-router-dom";
// import ItemCount from "./ItemCount";

const Item = ({ itemData }) =>{
    // const onAddHandler = (quantity) => {
    //     console.log(`Se agregaron ${quantity} productos al carrito`)
    // }


    return (
        <div>
        {itemData &&
            <div className="item">
                <p>{itemData.title}</p>
                <img className="itemDetail-img" src={itemData.pictureUrl}/>
                <p>Categoria: {itemData.category}</p>
                {/* <ItemCount stock={product.stock} initial={1} onAdd={onAddHandler}/> */}
                <footer>
                    <Link to={`/item/${itemData.id}`} className="option">Ver detalle</Link>
                </footer>
            </div>
        }
        </div>
    )
}

export default Item;