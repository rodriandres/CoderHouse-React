import "../components.css";

const ItemDetail = ({ product }) =>{

    return (
        <div>
            <h3>{product.title}</h3>
            <img className="itemDetail-img" src={product.pictureUrl}/>
            {product.description && <p>Descripción: {product.description}</p>}
            {product.price && <p>Precio: {product.price}</p>}
        </div>
    )
}

export default ItemDetail;