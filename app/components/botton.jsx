import React from "react";

const Botao = ({children}) => {

  return (
    <>
      <button className="bg-black border-emerald-600 font-bold rounded w-auto h-auto text-white hover:text-red-700">
        {children}
      </button>
    </>
  );
};

export default Botao;
