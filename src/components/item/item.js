import React from "react";
import { Link } from "react-router-dom";

export const Item = ({ item }) => {
  return (
    <div className="card m-3">
      <img src={item.pictureUrl} alt="" style={{ width: "20rem" }} />
      <div className="card-body">
        <h4 className="card-title">{item.title}</h4>
        <div className="price text-success">
          <h5 className="mt-4">${item.price}</h5>
        </div>
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={`/item/${item.id}`}
        >
          <button type="button" className="btn btn-success">
            Link to item
          </button>
        </Link>
      </div>
    </div>
  );
};
