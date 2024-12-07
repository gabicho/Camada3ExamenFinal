import React from "react";

const Message = ({ nombre, direccion }) => {
  return (
    <>
      <h4>Gracias, {nombre}, te contactaremos cuando antes via mail</h4>
      {/* <h4>En 30 minutos llega tu pedido a {direccion}</h4> */}
    </>
  );
};

export default Message;
