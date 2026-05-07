import React from "react";

const UseEffect = () => {
  React.useEffect(() => {
    console.log("Montou");

    return () => {
      console.log("Desmontou");
    };
  }, []);

  return (
    <div>
      <h1>UseEffect</h1>
    </div>
  );
};

export default UseEffect;
