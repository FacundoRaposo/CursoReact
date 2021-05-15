import React, { useState, useEffect } from "react";
import ItemDetail from "../item-detail/itemDetail";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase/client";

const getItems = (id) => {
  const db = getFirestore();
  const itemsColletion = db.collection("items");

  const item = itemsColletion.doc(id);

  return item.get();
};

export default function ItemDetailContainer() {
  const [item, setItem] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    getItems(itemId).then((res) => {
      console.log(res);
      //console.log('existe?', res.exists);
      if (res.exists) {
        //console.log(res);
        setItem({ id: res.id, ...res.data() });
      }
    });
  }, [itemId]);

  return <ItemDetail item={{ id: itemId, ...item }} />;
}
