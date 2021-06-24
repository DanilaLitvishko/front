import styled from 'styled-components';
   
export const Box = styled.div`
  flex: 0 0 auto;
  padding: 80px 60px;
  background:  #0B0D17;
  position: relative;
  bottom: 0;
  width: 100%;
  height: 300px;
`;

export const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 350px;
  height: 133px;
  left: 165px;
  top: 64px;
`

export const CompanyName = styled.div`
  position: static;
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
  position: static;
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
  position: static;
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
  position: static;
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

  color: #D9DBE1;
`

   
export const Links = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 375px;
  height: 232px;
  left: 640px;
  top: 64px;
`
   
export const CompanyColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 300px;
  height: 232px;
  left: 0px;
  top: 0px;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 30px;
`

export const JobsColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 160px;
  height: 156px;
  left: 215px;
  top: 0px;

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 30px;
`