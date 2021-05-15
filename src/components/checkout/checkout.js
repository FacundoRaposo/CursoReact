import React, { useState } from "react";

export const CheckOut = () => {
  const [idOrden, setIdOrden] = useState(setIdOrden);

  return <div>{idOrden ? `Tu  Numero de Orden es: ${idOrden}` : null}</div>;
};
