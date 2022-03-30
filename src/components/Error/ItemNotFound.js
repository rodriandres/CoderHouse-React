import "../components.scss";

const ItemNotFound = ({ itemId }) =>{

    return (
        <div>
            <h1>error:</h1>
           <h2>The Item ID: </h2> 
           <p>{itemId}</p>
           <h2>is not found</h2>
        </div>
    )
}

export default ItemNotFound;