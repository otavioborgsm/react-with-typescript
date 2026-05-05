import React from "react";
import Button from "./Button";
import Input from "./Input";
import Checkbox from "./Checkbox";

function App() {
  const [total, setTotal] = React.useState(0);

  function incrementar() {
    setTotal((total) => total + 1);
  }

  return (
    <div>
      <p>Total: {total}</p>
      <Button id="botao-principal" onClick={incrementar} tamanho="1.25rem">
        Incrementar
      </Button>

      <Input label="E-mail" id="email" type="email"/>
      <Input label="Nome" id="name" />
      <Input label="Início Viagem" id="inicio" type="date"/>
      <Input label="Horário" id="horario" type="time"/>
      <Checkbox label="Termos e condições" />
    </div>
  );
}

export default App;
