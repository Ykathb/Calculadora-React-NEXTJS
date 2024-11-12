import Barra from "./input";
import Botao from "./botton";
import { type } from "os";

const Formulario = ({tipo, placeholder, children }) => {
    return (
      <>
        <div className="flex p-3 m-3 ">
          <Barra tipo={type} lugarReservado={placeholder} />
          <div className="flex ml-2">
            <Botao>{children}</Botao>
          </div>
        </div>
      </>
    );
}
 
export default Formulario;
