import { useState } from "react";

export const useLocalStorage =(key, defaultValue) => {
  const getInitialValue = () => localStorage.getItem(key) ?? defaultValue;
  const [value,setValue] = useState(getInitialValue);
  const setAndStoreValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, newValue);
  };
  return [value, setAndStoreValue];
}