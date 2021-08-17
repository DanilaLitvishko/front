import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

export const Box = styled.div`
  width: 100%;
  height: 360px;
  background: ${(props) => props.theme.color.blackBlue};
`;

export const CompanyInfo = styled.div`
  margin-right: 125px;
  width: 350px;
  height: 133px;
`;

export const CompanyName = styled.div`
  width: 109px;
  height: 37px;
  font-family: ${(props) => props.theme.fontFamily};
  font-style: ${(props) => props.theme.fontStyle};
  font-weight: 900;
  font-size: 30px;
  line-height: 37px;
  text-transform: uppercase;
  color: ${(props) => props.theme.color.gray};
`;

export const Copyright = styled.div`
  font-family: ${(props) => props.theme.fontFamily};
  font-style: ${(props) => props.theme.fontStyle};
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  font-feature-settings: "liga" off;
  color: ${(props) => props.theme.color.moreBlueWhite};
`;

export const Heading = styled.div`
  width: 160px;
  height: 30px;
  font-family: ${(props) => props.theme.fontFamily};
  font-style: ${(props) => props.theme.fontStyle};
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  font-feature-settings: "liga" off;
  color: ${(props) => props.theme.color.white};
`;

export const String = styled.div`
  width: 200px;
  height: 26px;
  font-family: ${(props) => props.theme.fontFamily};
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  font-feature-settings: "liga" off;
  padding: 6px;
  color: ${(props) => props.theme.color.moreBlueWhite};
`;

export const CompanyColumn = styled.div`
  width: 300px;
  height: 280px;
`;

export const JobsColumn = styled(Grid)`
  width: 160px;
  height: 156px;
`;

export const useStyles = makeStyles({
  leftColumn: {
    marginTop: "64px",
    marginLeft: "165px",
  },
  centeredColumn: {
    marginTop: "64px",
  },
  rightColumn: {
    marginTop: "64px",
    marginRight: "120px",
  },
});
