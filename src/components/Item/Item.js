import "../components.scss";
import { Link } from "react-router-dom";

const Item = ({ itemData }) =>{

    return (
        <div className="itemListContainer__div--ulItem">
        {itemData &&
            <div className="item">
                <p>{itemData.name}</p>
                <img className="cartItemsContainer__item--img" src={itemData.pictureUrl}/>
                <p>Category: {itemData.category}</p>
                <footer>
                    <Link to={`/item/${itemData.id}`} className="option">Details</Link>
                </footer>
            </div>
        }
        </div>
    )
}

export default Item;