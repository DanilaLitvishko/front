import Grid from '@material-ui/core/Grid';
import React from "react";
import {
  Box,
  String,
  Heading,
  CompanyInfo,
  CompanyName,
  Copyright,
  Links,
  CompanyColumn,
  JobsColumn,
} from "./footer.styles";
  
const Footer = () => {
  return (
    <Grid
      container
      direction="row"
    >
      <Box>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
        >
          <CompanyInfo>
            <CompanyName>I-TAPP</CompanyName>
            <Copyright>Copyright © 2021 I-TAPP</Copyright>
            <Copyright>All rights reserved</Copyright>
          </CompanyInfo>
        </Grid>
        <Links>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <CompanyColumn>
            <Heading>Company</Heading>
            <String>Home</String>
            <String>About I-TAPP</String>
            <String>News</String>
            <String>Terms and Conditions</String>
            <String>Privacy Policy</String>
          </CompanyColumn>
        </Grid>
        <Grid
          container
          direction="column"
          justify="flex-end"
          alignItems="center"
        >
          <JobsColumn>
            <Heading>Jobs</Heading>
            <String>For Candidates</String>
            <String>For Employers</String>
            <String>For Headhunters</String>
          </JobsColumn>
        </Grid>
        </Links>
      </Box>
    </Grid>
  );
};
export default Footer;