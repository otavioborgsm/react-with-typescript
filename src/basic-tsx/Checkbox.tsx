import React from "react";

const Checkbox = ({ label }: { label: string }) => {
  const [value, setValue] = React.useState(false);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.currentTarget.checked);
  };

  return (
    <label
      style={{
        padding: "1rem",
        border: `2px solid ${value ? "#8D2" : "#F70"}`,
      }}
    >
      <input type="checkbox" checked={value} onChange={handleChange} />
      {label}
    </label>
  );
};

export default Checkbox;
