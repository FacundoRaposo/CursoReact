import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

export const CheckOut = ({ idOrden }) => {
  const { clear } = useContext(CartContext);

  return (
    <div>
      <Link to="/">
        <button type="button" className="btn btn-success" onClick={clear}>
          {idOrden ? `Tu  Numero de Orden es: ${idOrden}` : null}
        </button>
      </Link>
    </div>
  );
};
