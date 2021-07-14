import styled from 'styled-components'

export const LogoContainer = styled.div`
    width: 102px;
    height: 43px;
`

export const LeftNav = styled.div`
    width: 456px;
    height: 32px;
`

export const Line = styled.div`
    width: 100%;
    height: 1px;
    left: 0px;
    top: 80px;
    background: ${props => props.theme.color.grayWhite};
`

export const ButtonsContainer = styled.div`
    padding: 0px;
    width: 214px;
    height: 40px;
`;

export const MenuItem = styled.div`
    font-family: ${props => props.theme.fontFamily};
    font-style: ${props => props.theme.fontStyle};
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    font-feature-settings: 'liga' off;
    color: ${props => props.theme.color.gray};
`;

export const LoginButton = styled.button`
    height: 40px;
    width: 100px;
    border: 1px solid ${props => props.theme.color.blue};
    box-sizing: border-box;
    border-radius: 8px;
    margin: 0px 14px;
`

export const SignUpButton = styled.button`
    height: 40px;
    width: 100px;
    border: 1px solid ${props => props.theme.color.blue};
    background: ${props => props.theme.color.blue};
    border-radius: 8px;
`

export const Login = styled.div`
    width: 38px;
    height: 20px;
    font-family: ${props => props.theme.fontFamily};
    font-style: ${props => props.theme.fontStyle};
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    color: ${props => props.theme.color.blue};
`

export const SignUp = styled.div`
    width: 51px;
    height: 20px;
    font-family: ${props => props.theme.fontFamily};
    font-style: ${props => props.theme.fontStyle};
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    font-feature-settings: 'liga' off;
    color: ${props => props.theme.color.white};
`
