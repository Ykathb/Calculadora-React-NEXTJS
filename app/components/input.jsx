import React from "react";

const Barra = (props) => {
  return (
    <div>
      <input
        className="bg-emerald-300 border border-emerald-500 font-bold rounded w-[200px]"
        type={props.tipo}
        placeholder={props.lugarReservado}
      />
    </div>
  );
};

export default Barra;
