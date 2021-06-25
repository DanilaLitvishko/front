import styled from 'styled-components';
   
export const Box = styled.div`
  width: 1440px;
  height: 360px;

  background: #0B0D17;
`;

export const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 125px;

  width: 350px;
  height: 133px;
  left: 165px;
  top: 64px;
`

export const CompanyName = styled.div`
  width: 109px;
  height: 37px;
  left: 0px;
  top: 0px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 37px;

  text-transform: uppercase;

  color: #999999;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 40px 0px;
`

export const Copyright = styled.div`
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 57.14%;

  font-family: Manrope;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;

  font-feature-settings: 'liga' off;

  color: #D9DBE1;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 8px 0px;
`

export const Heading = styled.div`
  width: 160px;
  height: 30px;
  left: 0px;
  top: 0px;

  font-family: Manrope;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;

  font-feature-settings: 'liga' off;

  color: #FFFFFF;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 24px 0px;
`

export const String = styled.div`
  width: 200px;
  height: 26px;
  left: 0px;
  top: 0px;

  font-family: Manrope;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;

  font-feature-settings: 'liga' off;
  padding: 6px;

  color: #D9DBE1;
`

   
export const Links = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  width: 375px;
  height: 232px;
`
   
export const CompanyColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 0px;

  width: 300px;
  height: 232px;

  order: 0;
  margin-right: 10px;
`

export const JobsColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 160px;
  height: 156px;

  order: 1;
`