import "../components.css";
import { Link } from "react-router-dom";

const Item = ({ itemData }) =>{

    return (
        <div>
        {itemData &&
            <div className="item">
                <p>{itemData.title}</p>
                <img className="itemDetail-img" src={itemData.pictureUrl}/>
                <p>Categoria: {itemData.category}</p>
                <footer>
                    <Link to={`/item/${itemData.id}`} className="option">Ver detalle</Link>
                </footer>
            </div>
        }
        </div>
    )
}

export default Item;