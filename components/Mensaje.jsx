import React from "react";

function Mensaje(props) {
  const { titulo, detalle } = props;

  return (
    <div
      className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 my-3"
      role="alert"
    >
      <p className="font-bold">{titulo}</p>
      <p className="text-sm">{detalle}</p>
    </div>
  );
}

export default Mensaje;
