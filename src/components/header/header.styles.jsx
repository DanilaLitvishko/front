import styled from 'styled-components'

export const LogoContainer = styled.div`
    width: 102px;
    height: 43px;
    left: 165px;
    top: 15px;
`

export const HeaderContainer = styled.div`
    width: 1440px;
    height: 80px;
    left: 0px;
    top: 0px;
`;

export const LeftNav = styled.div`
    width: 456px;
    height: 32px;
    left: 300px;
    top: calc(50% - 2px/2);
`

export const OptionsContainer = styled.div`
    width: 456px;
    height: 20px;
    left: 0px;
    top: 6px;
    display: flex;
    flex-direction: row;
`;

export const Line = styled.div`
    width: 1640px;
    height: 1px;
    left: 0px;
    top: 80px;

    background: #EBEBEB;
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;

    width: 214px;
    height: 40px;
    right: 165px;
    top: calc(50% - 40px/2);
    @media screen and (max-width: 800px) {
        width: 80%;
    }
`;

export const MenuItem = styled.div`
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;

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
    left: 0px;
    top: 0px;

    left: 0%;
    right: 53.27%;
    top: 0%;
    bottom: 0%;

    border: 1px solid #2E1AAD;
    box-sizing: border-box;
    border-radius: 8px;

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 14px;
`

export const SignUpButton = styled.button`
    height: 40px;
    width: 100px;
    left: 114px;
    top: 0px;
    left: 53.27%;
    right: 0%;
    top: 0%;
    bottom: 0%;

    border: 1px solid #2E1AAD;
    background: #2E1AAD;
    border-radius: 8px;

    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 14px;
`

export const Login = styled.span`
    width: 38px;
    height: 20px;
    left: calc(50% - 38px/2);
    top: calc(50% - 20px/2);

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
    left: calc(50% - 51px/2 + 0.5px);
    top: calc(50% - 20px/2);

    font-family: Manrope;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;

    text-align: center;
    font-feature-settings: 'liga' off;

    color: #FFFFFF;
`
