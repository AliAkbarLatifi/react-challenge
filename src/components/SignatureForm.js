import { Grid } from "@material-ui/core";
import React from "react";
import Form from "./Form";
import FormInput from "./FormInput";

const FormFields = ({ initialValues, onChange }) => {
  return (
    <Form initialValues={initialValues} onChange={onChange}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <FormInput name="name" placeholder="Name" />
        </Grid>
        <Grid item xs={6}>
          <FormInput name="surname" placeholder="Surname" />
        </Grid>
        <Grid item xs={6}>
          <FormInput name="email" placeholder="Email" />
        </Grid>
        <Grid item xs={6}>
          <FormInput name="roleName" placeholder="Role" />
        </Grid>
      </Grid>
    </Form>
  );
};

export default React.memo(FormFields);
