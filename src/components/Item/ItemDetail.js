import "../components.css";

const ItemDetail = ({ item }) =>{

    return (
        <div>
            <h3>{item.title}</h3>
            <img className="itemDetail-img" src={item.pictureUrl}/>
            <p>Descripción: {item.description}</p>
            <p>Precion: {item.price}</p>
        </div>
    )
}

export default ItemDetail;