import React from "react";
import Footer from "../footer/footer.component";
import Header from "../header/header.component";
import { Grid } from "@material-ui/core";
import { LayoutProps } from "../../interfaces/layout-props.interface";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  mainComponent: {
    marginTop: "60px",
    marginBottom: "60px",
  },
});

const Layout = (props: LayoutProps) => {
  const classes = useStyles();
  return (
    <Grid container spacing={2}>
      <Grid item container md={12}>
        <Header />
      </Grid>
      <Grid
        item
        container
        md={12}
        justifyContent="center"
        className={classes.mainComponent}
      >
        {props.children}
      </Grid>
      <Grid item container md={12} direction="column">
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Layout;
