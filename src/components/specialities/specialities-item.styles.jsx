import styled from 'styled-components';

export const Industrie = styled.div`
    font-family: ${props => props.theme.fontFamily};
    font-style: ${props => props.theme.fontStyle};
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    border-top: 1px solid ${props => props.theme.color.grayWhite};
    margin-left: 24px;
    padding-top: 10px;
    padding-bottom: 14px;
    width: 349px;
    display: flex;
`;

export const TextContainer = styled.span`
  width: 90%;
`;

export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
  color: ${props => props.theme.color.gray};
`;
