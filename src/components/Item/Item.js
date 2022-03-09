import "../components.scss";
import { Link } from "react-router-dom";

const Item = ({ itemData }) =>{

    return (
        <div className="itemListContainer__div--ulItem">
        {itemData &&
            <div className="item">
                <p>{itemData.name}</p>
                <img className="itemDetail-img" src={itemData.pictureUrl}/>
                <p>Categoria: {itemData.category}</p>
                <footer>
                    <Link to={`/item/${itemData.id}`} className="option">Details</Link>
                </footer>
            </div>
        }
        </div>
    )
}

export default Item;