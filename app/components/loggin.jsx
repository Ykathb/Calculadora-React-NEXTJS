import { useState } from "react";


const Loging = () => {
     const [loggin, setLoggin] = useState(false);

     const text = () => {
       loggin ? setLoggin(false) : setLoggin(true);
     };
    return (
      <>
        <div className="flex justify-center bg-pink-400 align-middle text-black h-[300px] p-4">
          <div>
            <label htmlFor="name">Login: </label>
            <input className="border" type="text" />
            <div className="p-1">
              <button
                onClick={text
                }
                className="bg-black text-white flex justify-center ml-[100px] p-2"
              >
                Clique aqui
              </button>
              {loggin ? <span>vc ja entrou </span> : <span>entrar</span>}
            </div>
          </div>
        </div>
      </>
    );
}
 
export default Loging;