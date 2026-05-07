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
      <h2>UseEffect</h2>
    </div>
  );
};

export default UseEffect;
