import React from "react";

const useLocalStorage = (
  key: string,
  startValue: string
): [string, React.Dispatch<React.SetStateAction<string>>] => {
  const [state, setState] = React.useState(() => {
    const local = window.localStorage.getItem(key)
    return local ?? startValue
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [state, key]);

  return [state, setState];
  // return [state, setState] as const;
};

export default useLocalStorage;
