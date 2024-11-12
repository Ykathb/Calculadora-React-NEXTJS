import { useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";

const Calculadora = () => {
  const [resultado, setResultado] = useState("");
  const [operador, setOperador] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        setResultado(eval(operador).toString());
      } catch (error) {
        setResultado("Erro");
      }
    } else if (value === "C") {
      setResultado("");
      setOperador("");
    } else if (value === "DEL") {
      if (resultado) {
        setResultado(resultado.slice(0, -1));
      } else {
        setOperador(operador.slice(0, -1));
      }
    } else {
      setOperador((prevExpression) => prevExpression + value);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="h-[430px] w-[300px] bg-purple-300 border-4 border-lg border-black text-center">
          {/* Espaço de entrada */}
          <div className="flex rounded-md items-center justify-center mx-auto mt-1 bg-white w-[280px] h-[100px]">
            <input
              className="h-full w-full text-3xl rounded-md"
              type="text"
              value={operador}
              readOnly
            />
            <input
              className="h-full w-full text-3xl rounded-md"
              type="text"
              value={resultado}
              readOnly
            />
          </div>

          {/* Operadores */}
          <div className="flex justify-around space-x-4 mt-2 m-1">
            <button
              className="bg-black w-[100px] h-[50px] rounded-md text-white border-yellow-400 flex items-center justify-center text-3xl"
              onClick={() => handleButtonClick("+")}
            >
              +
            </button>

            <button
              className="bg-black w-[100px] h-[50px] rounded-md text-white border-yellow-400 flex items-center justify-center text-3xl"
              onClick={() => handleButtonClick("-")}
            >
              -
            </button>

            <button
              className="bg-black w-[100px] h-[50px] rounded-md text-white border-yellow-400 flex items-center justify-center text-3xl"
              onClick={() => handleButtonClick("%")}
            >
              %
            </button>

            <button
              className="bg-black w-[100px] h-[50px] rounded-md text-white border-yellow-400 flex items-center justify-center text-3xl"
              onClick={() => handleButtonClick("*")}
            >
              *
            </button>
          </div>

          {/* Números */}
          {/* 1 ao 3 */}
          <div className="flex justify-evenly space-x-4 mt-2 m-1">
            <button
              className="bg-black w-[100px] h-[50px] rounded-md text-white border-yellow-400 flex items-center justify-center text-3xl"
              onClick={() => handleButtonClick("1")}
            >
              1
            </button>

            <button
              className="bg-black w-[100px] h-[50px] rounded-md text-white border-yellow-400 flex items-center justify-center text-3xl"
              onClick={() => handleButtonClick("2")}
            >
              2
            </button>

            <button
              className="bg-black w-[100px] h-[50px] rounded-md text-white border-yellow-400 flex items-center justify-center text-3xl"
              onClick={() => handleButtonClick("3")}
            >
              3
            </button>
          </div>

          {/* 4 ao 6 */}
          <div className="flex justify-evenly space-x-4 mt-2 m-1">
            <button
              className="bg-black w-[100px] h-[50px] rounded-md text-white border-yellow-400 flex items-center justify-center text-3xl"
              onClick={() => handleButtonClick("4")}
            >
              4
            </button>

            <button
              className="bg-black w-[100px] h-[50px] rounded-md text-white border-yellow-400 flex items-center justify-center text-3xl"
              onClick={() => handleButtonClick("5")}
            >
              5
            </button>

            <button
              className="bg-black w-[100px] h-[50px] rounded-md text-white border-yellow-400 flex items-center justify-center text-3xl"
              onClick={() => handleButtonClick("6")}
            >
              6
            </button>
          </div>

          {/* 7 ao 9 */}
          <div className="flex justify-evenly space-x-4 mt-2 m-1">
            <button
              className="bg-black w-[100px] h-[50px] rounded-md text-white border-yellow-400 flex items-center justify-center text-3xl"
              onClick={() => handleButtonClick("7")}
            >
              7
            </button>

            <button
              className="bg-black w-[100px] h-[50px] rounded-md text-white border-yellow-400 flex items-center justify-center text-3xl"
              onClick={() => handleButtonClick("8")}
            >
              8
            </button>

            <button
              className="bg-black w-[100px] h-[50px] rounded-md text-white border-yellow-400 flex items-center justify-center text-3xl"
              onClick={() => handleButtonClick("9")}
            >
              9
            </button>
          </div>

          {/* 0 e Funções */}
          <div className="flex justify-start space-x-4 mt-2 m-1">
            <button
              className="bg-black w-[100px] h-[50px] rounded-md text-white border-yellow-400 flex items-center justify-center text-3xl"
              onClick={() => handleButtonClick("0")}
            >
              0
            </button>

            <button
              className="bg-black w-[100px] h-[50px] rounded-md text-white border-yellow-400 flex items-center justify-center text-3xl"
              onClick={() => handleButtonClick("DEL")}
            >
              <FaDeleteLeft />
            </button>

            <button
              className="bg-black w-[100px] h-[50px] rounded-md text-white border-yellow-400 flex items-center justify-center text-3xl"
              onClick={() => handleButtonClick("=")}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculadora;
