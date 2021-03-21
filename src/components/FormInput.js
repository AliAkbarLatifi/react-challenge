import { TextField } from "@material-ui/core";
import React, { useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { useField } from "./useField";

export const FormInput = (props) => {
  const [value, setValue] = useField(props.name);
  const handleChange = (e) => setValue(e.target.value);
  return <TextField {...props} value={value} onChange={handleChange} />;
};

FormInput.defaultProps = {
  variant: "outlined",
  size: "small",
  fullWidth: true,
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium"]),
  variant: PropTypes.oneOf(["filled", "outlined", "standard"]),
};
