import { Container, Typography } from "@material-ui/core";
import { throttle } from "lodash";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { getAddress, getOwners, saveUser } from "../api";
import SignatureForm from "./SignatureForm";
import { SignaturePreview } from "./SignaturePreview";
import { useSnackbarContext } from "./SnackBar";

const initialValues = { name: "", surname: "", email: "", roleName: "" };

export const SignaturePage = () => {
  const { showMessage } = useSnackbarContext();
  const [userInfo, setUserInfo] = useState(initialValues);
  const [owners, setOwners] = useState([]);
  const [address, setAddress] = useState({});

  const saveUserData = useMemo(
    () =>
      throttle(async (data) => {
        const { state, error } = await saveUser(data);
        showMessage(
          {
            severity: state,
            message: error || state,
          },
          { autoHideDuration: 2000 }
        );
      }, 6000), //1000 milisecond is added to change the order of event loop queue
    []
  );

  const handleChange = useCallback((values) => {
    setUserInfo(values);
    saveUserData(values);
  }, []);

  useEffect(() => {
    getOwners().then(setOwners);
    getAddress().then(setAddress);
  }, []);

  return (
    <Container maxWidth="sm">
      <Typography component="h1" variant="h3" gutterBottom>
        Edit your email signature
      </Typography>
      <SignatureForm initialValues={initialValues} onChange={handleChange} />
      <SignaturePreview {...userInfo} {...{ owners, address }} />
    </Container>
  );
};
