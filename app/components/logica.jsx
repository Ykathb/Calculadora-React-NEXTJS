const Logica = () => {
  const idade = 20;
  return (
    <>
{/* isso serve como if e else */}
      {idade >= 18 ? (
        <p>Bem vindo cachorro chorro vc ja tem 18</p>
      ) : (
        <p>Sai daqui paezao vc é menorrr</p>
      )}
    </>
  );
};

export default Logica;
