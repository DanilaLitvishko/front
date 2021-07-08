import styled from 'styled-components'

export const Industrie = styled.div`
    font-family: Manrope;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    border-bottom: 1px solid #999999;
    padding: 7px;
    margin: 7px;
    width: 400px;
    display: flex;
    &:last-child {
        border-bottom: none;
    }
`

export const TextContainer = styled.span`
  width: 98%;
`;

export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;