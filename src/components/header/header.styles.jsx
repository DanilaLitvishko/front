import styled from 'styled-components'
import {Typography} from '@material-ui/core'

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

    background: #EBEBEB;
`

export const ButtonsContainer = styled.div`
    padding: 0px;

    width: 214px;
    height: 40px;
    @media screen and (max-width: 800px) {
        width: 80%;
    }
`;

export const MenuItem = styled(Typography)`
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;

    font-feature-settings: 'liga' off;

    color: #999999;
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

export const Login = styled(Typography)`
    width: 38px;
    height: 20px;

    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    color: #2E1AAD;
`

export const SignUp = styled(Typography)`
    width: 51px;
    height: 20px;

    font-weight: bold;
    font-size: 14px;
    line-height: 20px;

    text-align: center;
    font-feature-settings: 'liga' off;

    color: #FFFFFF;
`
