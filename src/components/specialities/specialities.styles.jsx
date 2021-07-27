import styled from 'styled-components';

export const HeadingContainer = styled.div`
  width: 100%;
  height: 34px;
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

export const Heading = styled.div`
    display: flex;
    margin-left: 24px;
    width: auto;
    height: 24px;
    font-family: Manrope;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 24px;
    font-feature-settings: 'liga' off;
    color: ${props => props.theme.color.redBlack};
`;

export const SpecialitiesContainer = styled.div`
    margin-left: 8px;
    width: 397px;
    height: 286px;
    background: ${props => props.theme.color.white};
    box-shadow: 0px 30px 40px rgba(212, 217, 232, 0.1);
    border-radius: 8px;
    display: flex;
    margin-bottom: -50px;
    flex-direction: column;
`;

export const AngleText = styled.div`
    width: 26px;
    height: 20px;
    font-family: ${props => props.theme.fontFamily};
    font-style: ${props => props.theme.fontStyle};
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    font-feature-settings: 'liga' off;
    color: ${props => props.theme.color.blue};
    display: flex;
    margin-right: 39px;
    cursor: pointer;
`;

export const ViewAllText = styled.div`
    margin-left: 8px;
    width: 48px;
    height: 16px;
    font-family: ${props => props.theme.fontFamily};
    font-style: ${props => props.theme.fontStyle};
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    font-feature-settings: 'liga' off;
    color:  ${props => props.theme.color.blue};
    margin-top: 5px;
    cursor: pointer;
`;