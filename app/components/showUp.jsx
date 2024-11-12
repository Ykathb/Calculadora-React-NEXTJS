"use client";

import React, { useState } from "react";

const Show = () => {
    const [texto,setTexto]=useState(false);

    const text =()=>{
        texto ? setTexto(false): setTexto(true);
    }

  return (
    <>
      <div className="flex justify-center bg-pink-500 h-[300px]">
        <button
          onClick={text}
          className="bg-black rounded h-[50px] mx-auto p-4 text-white"
        >
          Clique aqui
          <div className="flex flex-col justify-center text-center align-middle text-lime-200">
            {texto ? <span>fubanga é a luisa </span> : <span></span>}
          </div>
        </button>
      </div>
    </>
  );
};

export default Show;
