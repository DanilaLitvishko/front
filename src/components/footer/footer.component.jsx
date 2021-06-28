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
      <Box
        container
        direction="row"
      >
        <CompanyInfo
          container
          item
          direction="column"
          justify="flex-start"
          alignItems="center"
        >
          <CompanyName item>I-TAPP</CompanyName>
          <Copyright item>Copyright © 2021 I-TAPP</Copyright>
          <Copyright item>All rights reserved</Copyright>
        </CompanyInfo>
        <Links>
          <CompanyColumn
            container
            item
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Heading item>Company</Heading>
            <String item>Home</String>
            <String item>About I-TAPP</String>
            <String item>News</String>
            <String item>Terms and Conditions</String>
            <String item>Privacy Policy</String>
          </CompanyColumn>
          <JobsColumn
            container
            item
            direction="column"
            justify="flex-end"
            alignItems="center"
          >
            <Heading item>Jobs</Heading>
            <String item>For Candidates</String>
            <String item>For Employers</String>
            <String item>For Headhunters</String>
          </JobsColumn>
        </Links>
      </Box>
  );
};
export default Footer;