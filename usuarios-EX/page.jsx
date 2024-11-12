import Link from "next/link";

const Pessoas = () => {
  const pessoas = [{ nome: "Hec" }, { nome: "JEc" }, { nome: "Mec" }];

  return (
    <>
      <h1>Entrando</h1>
      <ul>
        {pessoas.map((pessoa) => {
          return (
            <li key={pessoa.nome}>
              <Link href={`pessoas/${pessoa.nome}`}>
                <a>{pessoa.nome}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Pessoas;
