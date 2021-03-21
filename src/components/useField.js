import React, { useMemo } from "react";
import { FormContext } from "./Form";

export function useField(name) {
  const { values, handleChange } = React.useContext(FormContext);
  if (values === undefined) {
    throw new Error("useField must be used within a Form provider");
  }
  if (name === undefined) {
    throw new Error("Invalid field name. Either pass `useField` a string");
  }

  const onChange = useMemo(() => handleChange(name), [name]);
  return [values[name], onChange];
}
