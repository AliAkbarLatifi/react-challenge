import { Link, Typography, Grid, Box, makeStyles } from "@material-ui/core";
import React from "react";
import { Logo } from "./Logo";
import { Meta } from "./Meta";

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    display: "inline-block",
    border: "1px solid #DDD",
    padding: spacing(2),
    borderRadius: spacing(2),
    marginTop: spacing(2),
    "& .MuiTypography-body1": {
      lineHeight: 1.3,
    },
  },
}));

const addressDate = new Date("01.08.2020");

export const SignaturePreview = ({
  name,
  surname,
  email,
  roleName,
  address,
  owners,
}) => {
  const classes = useStyles();
  const currentAddress =
    new Date().getTime() > addressDate.getTime() ? address.new : address.old;
  return (
    <Box className={classes.root}>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Logo />
        </Grid>
        <Grid item>
          <Typography component="div">
            <strong>
              {name} {surname}
            </strong>
          </Typography>
          <Typography component="div">{roleName}</Typography>
          <Typography component="div">
            <Link href={`mailto: ${email}`}>{email}</Link>
          </Typography>
        </Grid>
      </Grid>
      <Meta
        address={{
          street: currentAddress?.address,
          code: currentAddress?.postalCode,
          city: currentAddress?.city,
        }}
        owners={owners}
      />
      <Typography variant="caption">
        <b>Neues von Capmo:</b>

        <Link href="https://www.capmo.de/blog/baustellenmamagement-software">
          eBook &quot;Wirtschaftlich erfolgreich am Bau&quot; – jetzt gratis
          herunterladen!
          <br />
          Neues aus unserem Baumagazin: So unterstützt Sie eine
          Baustellenmanagement Software
          <br />
          Erfolgsgeschichten unserer Kunden: Brand Berger digitalisieren die
          Projektsteuerung mit Capmo
        </Link>
      </Typography>
    </Box>
  );
};
