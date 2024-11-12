"use client"

import { useState } from "react";

const Soma = () => {
  const [numero1, atualizarNumero1] = useState(0);
  const [numero2, atualizarNumero2] = useState(0);

  return (
    <>
      <input
        type="number"
        placeholder="Digite o primeiro numero: "
        onChange={(e) => atualizarNumero1(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Digite o segundo numero: "
        onChange={(e) => atualizarNumero2(Number(e.target.value))}
      />
      <p>Soma: {numero1 + numero2}</p>
    </>
  );
};

export default Soma;
