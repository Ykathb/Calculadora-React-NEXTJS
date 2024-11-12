import { useState } from "react";

const Contador = () => {
  const [mais, setMais] = useState(0);
  const [menos, setMenos] = useState(0);

  return (
    <>
      <button
        className="bg-black text-white w-[50px] h-[50px]"
        onClick={() => setMenos(menos - 1)}
      >
        Menos
      </button>
      <p>{mais + menos}</p>
      <button
        className="bg-black text-white w-[50px] h-[50px]"
        onClick={() => setMais(mais + 1)}
      >
        Mais
      </button>
    </>
  );
};

export default Contador;
