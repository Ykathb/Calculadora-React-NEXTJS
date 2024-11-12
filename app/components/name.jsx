"use client";

import { useState } from "react";
import React from "react";

const Name = () => {
  const [nome, setNome] = useState("");
  const [mostrarNome, setMostrarNome] = useState(false);

  return (
    <>
      <div className="bg-red-500 p-6">
        <input
          className="mx-auto block my-6 text-black py-4 px-4 w-[300px]"
          type="text"
          placeholder="Digite seu Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <button
          className="mx-auto block my-6 text-black py-4 w-[100px] bg-cyan-500"
          onClick={() => setMostrarNome(true)}
        >
          VER
        </button>

        {mostrarNome && <p>Seja Bem Vindo: {nome}</p>}
      </div>
    </>
  );
};

export default Name;
