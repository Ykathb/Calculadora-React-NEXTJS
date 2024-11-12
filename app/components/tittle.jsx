import estilo from "./tittle.module.css";

const Title = ({ children }) => {
  return (
    <>
      <h1 className={estilo.titulo}>{children}</h1>
    </>
  );
};

export default Title;
