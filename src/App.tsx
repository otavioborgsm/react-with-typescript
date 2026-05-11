import React from "react";
import Button from "./basic-tsx/Button";
import Input from "./basic-tsx/Input";
import Checkbox from "./basic-tsx/Checkbox";
import UseState from "./hooks-tsx/use-state/UseState";
import UseStateExercise from "./hooks-tsx/use-state/UseStateExercise";
import UseEffect from "./hooks-tsx/use-effect/UseEffect";
import UseRef from "./hooks-tsx/use-ref/UseRef";
import UseRefExercise from "./hooks-tsx/use-ref/UseRefExercise";
import CustomHook from "./hooks-tsx/custom-hook/CustomHook";
import CustomHookExercise from "./hooks-tsx/custom-hook/CustomHookExercise";

function App() {
  const [total, setTotal] = React.useState(0);
  const [email, setEmail] = React.useState("");
  const [nome, setNome] = React.useState("");
  const [inicio, setInicio] = React.useState("");
  const [horario, setHorario] = React.useState("");

  function incrementar() {
    setTotal((total) => total + 1);
  }

  return (
    <div>
      <h1>Básico do TSX</h1>
      <p>Total: {total}</p>
      <Button id="botao-principal" onClick={incrementar} tamanho="1.25rem">
        Incrementar
      </Button>

      <Input label="E-mail" id="email" type="email" setState={setEmail} />
      <Input label="Nome" id="name" setState={setNome} />
      <Input
        label="Início Viagem"
        id="inicio"
        type="date"
        setState={setInicio}
      />
      <Input label="Horário" id="horario" type="time" setState={setHorario} />
      <Checkbox label="Termos e condições" />
      <h1>Hooks TSX</h1>
      <UseState />
      <UseStateExercise />
      <UseEffect />
      <UseRef />
      <UseRefExercise />
      <CustomHook />
      <CustomHookExercise />
    </div>
  );
}

export default App;
