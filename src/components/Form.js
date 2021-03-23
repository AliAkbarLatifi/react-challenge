import PropTypes from "prop-types";
import React, { useState } from "react";
import { useDidUpdate } from "../utils/useDidUpdate";

export const FormStateContext = React.createContext();
export const FormUpdaterContext = React.createContext();
function Form({ initialValues = {}, onChange, children }) {
  const [values, setValues] = useState(initialValues);

  useDidUpdate(() => {
    setTimeout(() => {
      onChange(values);
    }, 10);
  }, [values]);

  return (
    <FormStateContext.Provider value={values}>
      <FormUpdaterContext.Provider value={setValues}>
        {children}
      </FormUpdaterContext.Provider>
    </FormStateContext.Provider>
  );
}

Form.propTypes = {
  initialValues: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Form;
