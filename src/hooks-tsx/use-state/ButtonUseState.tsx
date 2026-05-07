import React from "react";

type ButtonProps = {
  incrementar: React.Dispatch<React.SetStateAction<number>>;
};

const ButtonUseState = ({ incrementar }: ButtonProps) => {
  return (
    <button onClick={() => incrementar((total) => total + 1)}>
      Incrementar
    </button>
  );
};

export default ButtonUseState;
