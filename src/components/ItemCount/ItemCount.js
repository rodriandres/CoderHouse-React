import "../components.css";
import { Icon } from 'react-icons-kit'
import {plus} from 'react-icons-kit/icomoon/plus'
import {minus} from 'react-icons-kit/icomoon/minus'
import { useEffect, useState } from "react";

const ItemCount = ( {stock, initial } ) =>{
    const [
        itemCount,
        setItemCount,
    ] = useState(0);


    
    useEffect(() => {
        setItemCount(initial);
    }, [])
    
  
    const itemDecrease = () => {
        if(itemCount > 0){
            setItemCount(itemCount - 1);   
        }
    }

    const itemAdd = () => {
        if(itemCount < stock){
            itemCount.parseNumber
            setItemCount(itemCount + 1);  
        }else{
            console.log("No hay mas stock disponible del product")
        }
        
    }
    

    return (
        <div className="div">
            <button className="div__button" onClick={itemDecrease}>
                <Icon icon={minus}/> 
            </button>
            <p>{itemCount}</p>
            <button className="div__button" onClick={itemAdd}>
                <Icon icon={plus}/> 
            </button>
            
        </div>
    )
}

export default ItemCount;