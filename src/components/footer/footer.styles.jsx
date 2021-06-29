import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
   
export const Box = styled.div`
  width: 100%;
  height: 360px;

  background: #0B0D17;
`;

export const CompanyInfo = styled.div`
  margin-right: 125px;

  width: 350px;
  height: 133px;
`

export const CompanyName = styled.div`
  width: 109px;
  height: 37px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 37px;

  text-transform: uppercase;

  color: #999999;
`

export const Copyright = styled.div`
  font-family: Manrope;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;

  font-feature-settings: 'liga' off;

  color: #D9DBE1;
`

export const Heading = styled.div`
  width: 160px;
  height: 30px;

  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;

  font-feature-settings: 'liga' off;

  color: #FFFFFF;
`

export const String = styled.div`
  width: 200px;
  height: 26px;

  font-family: Manrope;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;

  font-feature-settings: 'liga' off;
  padding: 6px;

  color: #D9DBE1;
`
   
export const CompanyColumn = styled.div`
  width: 300px;
  height: 280px;

`

export const JobsColumn = styled(Grid)`
  width: 160px;
  height: 156px;

`