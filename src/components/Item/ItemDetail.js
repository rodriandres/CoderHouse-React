import "../components.css";

const ItemDetail = ({ item }) =>{

    return (
        <div>
            <h3>{item.title}</h3>
            <img className="itemDetail-img" src={item.pictureUrl}/>
            {item.description && <p>Descripción: {item.description}</p>}
            {item.price && <p>Precio: {item.price}</p>}
        </div>
    )
}

export default ItemDetail;