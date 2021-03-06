import "../components.scss";
import { Icon } from 'react-icons-kit'
import {plus} from 'react-icons-kit/icomoon/plus'
import {minus} from 'react-icons-kit/icomoon/minus'
import { useEffect, useState } from "react";
import { useNotificationServices } from "../../services/notifications/NotificationsServices";

const ItemCount = ( {stock = 1, initial = 1, onAdd } ) =>{
    const [ itemCount, setItemCount, ] = useState(0);

    const setNotification = useNotificationServices()

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
            setNotification('warning', 'There is no more stock available for the product');
        }
    }

    return (
        <div>
            <div className="div">
                <button className="div__button" onClick={itemDecrease}>
                    <Icon icon={minus}/> 
                </button>
                <p>{itemCount}</p>
                <button className="div__button" onClick={itemAdd}>
                    <Icon icon={plus}/> 
                </button>
            </div>
            <div>
                <button className="div__button" onClick={()=>onAdd(itemCount)}>
                    <span>Add to my Cart</span> 
                </button>
            </div>
        </div>

    )
}

export default ItemCount;