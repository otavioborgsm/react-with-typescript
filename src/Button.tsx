import React from 'react';

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  tamanho?: string;
};

const Button = (props: ButtonProps) => {
  return (
    <button style={{ fontSize: props.tamanho }} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
