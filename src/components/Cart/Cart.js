import "../components.css";

const Cart = ({ quantity }) =>{

    console.log(quantity)
    
    return (
        <div>
        {quantity > 0 &&
            <div>
                <p>cantidad de items: {quantity}</p>
            </div>
        }
        </div>
    )
}

export default Cart;