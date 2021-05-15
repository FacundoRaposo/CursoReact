import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { getFirestore } from "../../firebase/client.js";
import firebase from "firebase/app";
export const Cart = () => {
  const { cart, removeItem, totalItems, totalPrice, clear } =
    useContext(CartContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [finish, setFinish] = useState(false);
  const [idOrden, setIdOrden] = useState(null);

  const generarOrden = (e) => {
    e.preventDefault();
    let orden = {};

    const db = getFirestore();

    const ordersCollection = db.collection("orders");

    orden.comprador = { name, phone, email };

    orden.date = firebase.firestore.Timestamp.fromDate(new Date());
    orden.items = cart.map((cartItem) => {
      return {
        id: cartItem.prod.id,
        title: cartItem.prod.title,
        price: cartItem.prod.price,
      };
    });

    ordersCollection.add(orden).then((doc) => {
      setIdOrden(doc.id);
    });

    const itemsCollection = db.collection("items").where(
      firebase.firestore.FieldPath.documentId(),
      "in",
      cart.map((e) => e.prod.id)
    );

    const batch = db.batch();

    itemsCollection.get().then((collection) => {
      collection.docs.forEach((docSnapshot) => {
        batch.update(docSnapshot.ref, {
          stock:
            docSnapshot.data().stock -
            cart.find((item) => item.prod.id === docSnapshot.id).cant,
        });
      });
      //update

      batch.commit().then((res) => {
        console.log("resultado batch: ", res);
      });
    });
  };

  const noItemComp = (
    <h2>
      No hay Items en el carrito <Link to="/">Ir al home </Link>{" "}
    </h2>
  );

  const checkoutForm = (
    <div className="input-group center formulario needs-validation">
      <h4>Datos del Comprador</h4>
      <form action="" onSubmit={generarOrden}>
        <div className="input-group input-group-lg">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Nombre
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="input-group input-group-lg">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Telefono
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="input-group input-group-lg">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Email
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button className="btn btn-primary" onClick={generarOrden}>
          {" "}
          Finalizar compra
        </button>
      </form>
    </div>
  );

  return (
    <>
      {idOrden ? (
        <div>
          <Link to="/">
            <button className="btn btn-primary" onClick={clear}>
              Tu Numero de Orden es: ${idOrden}
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>Titulo</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th></th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {cart.map((cartItem) => (
                <tr key={cartItem.prod.id}>
                  <td> {cartItem.prod.title} </td>
                  <td>{cartItem.cant}</td>
                  <td>{cartItem.prod.price}</td>
                  <td>
                    <img
                      style={{ maxWidth: "100px" }}
                      src={cartItem?.prod.pictureUrl}
                      alt=""
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeItem(cartItem.prod.id)}
                    >
                      borrar
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td>Cantidad total: {totalItems}</td>
                <td>Total: {totalPrice}</td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
          <button onClick={clear} className="btn btn-danger">
            Borrar todo
          </button>
          <Link to="/">
            <button className="btn btn-info">Seguir comprando</button>
          </Link>
          <button
            onClick={() => setFinish(!finish)}
            className="btn btn-success"
          >
            Terminar compra
          </button>

          {finish ? checkoutForm : null}
        </div>
      )}
    </>
  );
};
