import React, { useState, useContext} from 'react';  
import { Link } from 'react-router-dom';
import './home.css';
import ContainerList from '../item-list-container/ItemListContainer';

export const Home = () => {


    return <>

        <div className="home flex">

            <div>
            <h1>Bienvenidos a Red Sport</h1>
            </div>
            <ContainerList />
        </div>
    
    
    
    </>
}
