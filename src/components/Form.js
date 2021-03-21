import produce from "immer";
import PropTypes from "prop-types";
import React, { useCallback, useMemo, useState } from "react";
import { useDidUpdate } from "../utils/useDidUpdate";

export const FormContext = React.createContext();

function Form({ initialValues = {}, onChange, children }) {
  const [values, setValues] = useState(initialValues);

  const handleChange = useCallback(
    (field) => (val) => {
      setValues(
        produce((draft) => {
          draft[field] = val;
        })
      );
    },
    []
  );

  const formValues = useMemo(() => ({ values, handleChange }), [values]);

  useDidUpdate(() => {
    onChange(values);
  }, [values]);

  return (
    <FormContext.Provider value={formValues}>{children}</FormContext.Provider>
  );
}

Form.propTypes = {
  initialValues: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default React.memo(Form);
