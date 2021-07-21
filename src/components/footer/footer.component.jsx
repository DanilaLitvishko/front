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
        <Grid container item direction="column" xs alignItems="flex-end" style={{'marginTop':'64px', 'marginLeft':'165px'}}>
          <CompanyInfo>
          <CompanyName>I-TAPP</CompanyName>
          <Copyright>Copyright © 2021 I-TAPP</Copyright>
          <Copyright>All rights reserved</Copyright>
          </CompanyInfo>
        </Grid>
        <Grid container item direction="column" xs alignItems="flex-end" style={{'marginTop':'64px'}}>
          <CompanyColumn>
            <Heading>Company</Heading>
            <String>Home</String>
            <String>About I-TAPP</String>
            <String>News</String>
            <String>Terms and Conditions</String>
            <String>Privacy Policy</String>
          </CompanyColumn>
        </Grid>
        <Grid container item direction="column" xs style={{'marginTop':'64px', marginRight:'120px'}}>
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