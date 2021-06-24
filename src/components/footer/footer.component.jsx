
import React from "react";
import {
  Box,
  Container,
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
    <Box>
      <CompanyInfo>
        <CompanyName>I-TAPP</CompanyName>
        <Copyright>Copyright © 2021 I-TAPP</Copyright>
        <Copyright>All rights reserved</Copyright>
      </CompanyInfo>
      <Links>
        <CompanyColumn>
          <Heading>Company</Heading>
          <String>Home</String>
          <String>About I-TAPP</String>
          <String>News</String>
          <String>Terms and Conditions</String>
          <String>Privacy Policy</String>
        </CompanyColumn>
        <JobsColumn>
          <Heading>Jobs</Heading>
          <String>For Candidates</String>
          <String>For Employers</String>
          <String>For Headhunters</String>
        </JobsColumn>
      </Links>
    </Box>
  );
};
export default Footer;