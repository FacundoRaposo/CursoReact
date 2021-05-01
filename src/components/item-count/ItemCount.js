import React, {Component, useState,useEffect}from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

export function ItemCount ({stock , initial, onAdd}){
    const [count, setCount] = useState(parseInt(initial));

    useEffect(() => {
        setCount(parseInt(initial));
        return;
    }, [initial]);

    const addHandle = () => {
        setCount(count +1);
    };

    const removeHandle = () =>{
        setCount(count - 1 );
    };

    const agregar = () => {
        onAdd(count)
      };

    return(
        <div className="align-items-center">
            <div className="sumatoria">
                <button 
                disabled={count<=0}
                className="btn btn-default btn-number"
                type="button"
                onClick={removeHandle}>
                    <span><FontAwesomeIcon icon={faMinus} /></span>

                </button>
                <div><span>{count}</span></div>
                <button 
                disabled={count>=stock}
                className="btn btn-default btn-number"
                type="button"
                onClick={addHandle}>
                    <span><FontAwesomeIcon icon={faPlus} /></span>
                </button>
            </div>
            <div>
                <button type="button" 
                disabled={count <= 0 || count>stock}
                className="btn btn-success"
                onClick={agregar}>
                    Agregar Al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount;