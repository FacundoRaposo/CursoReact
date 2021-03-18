import React from 'react';  
import {ItemCount} from '../item-count/ItemCount';

export const ContainerList = ({ name }) => {
    return (
    <>
    <div><p>Bienvenidos a {name}!!!</p></div>

    <div className="col-md-3 col-lg-3 right">
        <ItemCount stock="5" initial="1"/>
    </div>
    </>
    );
};

export default ContainerList;
