import React from "react";
import ButtonUseState from "./ButtonUseState";

function user() {
  return {
    nome: "Otávio",
    profissao: "Software Engineer",
  };
}

type User = {
  nome: string;
  profissao: string;
};

const UseState = () => {
  const [data, setData] = React.useState<null | User>(null);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      setData(user());
    }, 1000);
  }, []);

  return (
    <div>
      <div>
        <p>Total: {total}</p>
        <ButtonUseState incrementar={setTotal} />
      </div>
      {data !== null && (
        <div>
          {data.nome}: {data.profissao}
        </div>
      )}
    </div>
  );
};

export default UseState;
