import { Grid } from '@material-ui/core';
import styled from 'styled-components'

export const LogoContainer = styled(Grid)`
    width: 102px;
    height: 43px;
    border-bottom: 1px;
`

export const HeaderContainer = styled(Grid)`
`;

export const LeftNav = styled(Grid)`
    width: 456px;
    height: 32px;
`

export const Line = styled.div`
    width: 100%;
    height: 1px;
    left: 0px;
    top: 80px;

    background: #EBEBEB;
`

export const ButtonsContainer = styled(Grid)`
    padding: 0px;

    width: 214px;
    height: 40px;
    @media screen and (max-width: 800px) {
        width: 80%;
    }
`;

export const MenuItem = styled(Grid)`
    font-family: Manrope;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;

    font-feature-settings: 'liga' off;

    color: #999999;

    flex: none;
    order: 0;
    flex-basis: auto;
    margin: -12px 20px;
    text-align: center;
`;

export const LoginButton = styled.button`
    height: 40px;
    width: 100px;

    border: 1px solid #2E1AAD;
    box-sizing: border-box;
    border-radius: 8px;

    margin: 0px 14px;
`

export const SignUpButton = styled.button`
    height: 40px;
    width: 100px;

    border: 1px solid #2E1AAD;
    background: #2E1AAD;
    border-radius: 8px;
`

export const Login = styled.span`
    width: 38px;
    height: 20px;

    font-family: Manrope;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    color: #2E1AAD;
`

export const SignUp = styled.span`
    width: 51px;
    height: 20px;

    font-family: Manrope;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;

    text-align: center;
    font-feature-settings: 'liga' off;

    color: #FFFFFF;
`
