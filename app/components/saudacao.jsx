"use client";
import { useState } from "react";

const Saudacao = () => {
  const [mensagem, atualizarMensagem] = useState("");

  const name = "Gabriel";
  return (
    <div>
      <button onClick={() => atualizarMensagem("")}>Exibir mensagem</button>

      {/* Renderização Condicional*/}
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default Saudacao;
