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
        <div className="col-lg-3 col-md-3 col-sm-2">
            <div className="m-2 p-2 d-flex flex-row justify-content-around align-items-center">
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
                className="btn btn-success"
                onClick={()=> onAdd(count)}>
                    Agregar Al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount;