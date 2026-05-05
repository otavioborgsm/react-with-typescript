import React from "react";

// Diz que o componente terá Children
// type ButtonProps = React.PropsWithChildren<{
//   onClick?: () => void;
//   tamanho?: string;
// }>;

type ButtonProps = React.ComponentProps<"button"> & {
  tamanho?: string;
};

const Button = ({ tamanho, children, ...props }: ButtonProps) => {
  return (
    <button style={{ fontSize: tamanho }} {...props}>
      {children}
    </button>
  );
};

export default Button;
