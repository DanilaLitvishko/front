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
} from "./footer.styles";
  
const Footer = () => {
  return (
    <Box>
    <Grid container spacing={3}>
        <Grid container item direction="column" xs alignItems="flex-end" justify="center">
          <CompanyInfo>
          <CompanyName item>I-TAPP</CompanyName>
          <Copyright item>Copyright © 2021 I-TAPP</Copyright>
          <Copyright item>All rights reserved</Copyright>
          </CompanyInfo>
        </Grid>
        <Grid container item direction="column" xs alignItems="flex-end" justify="flex-start">
        <CompanyColumn>
            <Heading item>Company</Heading>
            <String item>Home</String>
            <String item>About I-TAPP</String>
            <String item>News</String>
            <String item>Terms and Conditions</String>
            <String item>Privacy Policy</String>
          </CompanyColumn>
        </Grid>
        <Grid container item direction="column" xs justify="flex-end">
          <JobsColumn>
            <Heading item>Jobs</Heading>
            <String item>For Candidates</String>
            <String item>For Employers</String>
            <String item>For Headhunters</String>
          </JobsColumn>
        </Grid>
      </Grid>
      </Box>
  );
};
export default Footer;