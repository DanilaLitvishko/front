import styled from 'styled-components'

export const Window = styled.div`
    width: 994px;
    height: 508px;

    background: #F5F7FA;
    border-radius: 8px;
`

export const EnterString = styled.div`
    font-family: ${props => props.theme.fontFamily};
    font-style: ${props => props.theme.fontStyle};
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 22px;

    color: #000000;
`