import React from "react";
import Grid from '@material-ui/core/Grid';
import {
  Box,
  String,
  Heading,
  CompanyInfo,
  CompanyName,
  Copyright,
  CompanyColumn,
  JobsColumn,
  useStyles,
} from "./footer.styles";
  
const Footer = () => {
  const styles = useStyles()
  return (
    <Box>
    <Grid container spacing={3}>
        <Grid container item direction="column" xs alignItems="flex-end" className={styles.leftColumn}>
          <CompanyInfo>
          <CompanyName>I-TAPP</CompanyName>
          <Copyright>Copyright © 2021 I-TAPP</Copyright>
          <Copyright>All rights reserved</Copyright>
          </CompanyInfo>
        </Grid>
        <Grid container item direction="column" xs alignItems="flex-end" className={styles.centeredColumn}>
          <CompanyColumn>
            <Heading>Company</Heading>
            <String>Home</String>
            <String>About I-TAPP</String>
            <String>News</String>
            <String>Terms and Conditions</String>
            <String>Privacy Policy</String>
          </CompanyColumn>
        </Grid>
        <Grid container item direction="column" xs className={styles.rightColumn}>
          <JobsColumn>
            <Heading>Jobs</Heading>
            <String>For Candidates</String>
            <String>For Employers</String>
            <String>For Headhunters</String>
          </JobsColumn>
        </Grid>
      </Grid>
      </Box>
  );
};
export default Footer;