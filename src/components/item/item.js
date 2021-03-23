import React from 'react';  

export const Item = ({ item }) => {
    return(
        <div className="card m-2">
            <img src={item.pictureUrl} alt="" style={{width: "15rem"}}/>
            <div className="card-body">
                <h4 className="card-title">{item.title}</h4>
                <div class="price text-success"><h5 class="mt-4">${item.price}</h5></div>
            </div>
        </div>
        );
};