import React from 'react';  
import { Link } from 'react-router-dom';

export const Item = ({ item }) => {
    return(
        <div className="card m-2">
            <img src={item.pictureUrl} alt="" style={{width: "15rem"}}/>
            <div className="card-body">
                <h4 className="card-title">{item.title}</h4>
                <div className="price text-success"><h5 className="mt-4">${item.price}</h5>
                
            </div>
            <Link to={`/item/${item.id}`}>Link to item</Link></div>
        </div>
        );
};
