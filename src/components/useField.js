import produce from "immer";
import React, { useCallback } from "react";
import { FormStateContext, FormUpdaterContext } from "./Form";

function useFormState(name) {
  const values = React.useContext(FormStateContext);
  if (typeof values === "undefined") {
    throw new Error("useFormState must be used within a Form provider");
  }
  return values[name];
}
function useFormUpdater(name) {
  const setValues = React.useContext(FormUpdaterContext);
  if (typeof setValues === "undefined") {
    throw new Error("useFormUpdater must be used within a Form provider");
  }
  const handleChange = useCallback(
    (field) => (val) => {
      setValues(
        produce((draft) => {
          draft[field] = val;
        })
      );
    },
    [setValues]
  );
  return handleChange(name);
}

export function useField(name) {
  if (name === undefined) {
    throw new Error("Invalid field name. Either pass `useField` a string");
  }
  return [useFormState(name), useFormUpdater(name)];
}
