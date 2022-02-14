import "../components.css";
import { Icon } from 'react-icons-kit'
import {plus} from 'react-icons-kit/icomoon/plus'
import {minus} from 'react-icons-kit/icomoon/minus'
import { useEffect } from "react";
//import { useState } from "react";

// Hooks
const useComponents = require('../../store/index');

const ItemCount = ( {stock, initial } ) =>{
    const {
        state,
        setItemCount,
    } = useComponents();


    
    useEffect(() => {
        console.log(state);
        setItemCount(parseInt(initial));
    }, [])
    
  
    const itemDecrease = () => {
        if(state.itemCount > 0){
            setItemCount(state.itemCount - 1);   
        }
    }

    const itemAdd = () => {
        if(state.itemCount < stock){
            state.itemCount.parseNumber
            setItemCount(parseInt(state.itemCount) + 1);  
        }else{
            console.log("No hay mas stock disponible del product")
        }
        
    }
    

    return (
        <div className="div">
            <button className="div__button" onClick={itemDecrease}>
                <Icon icon={minus}/> 
            </button>
            <p>{state.itemCount}</p>
            <button className="div__button" onClick={itemAdd}>
                <Icon icon={plus}/> 
            </button>
            
        </div>
    )
}

export default ItemCount;