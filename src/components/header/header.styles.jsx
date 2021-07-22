import styled from 'styled-components'
import {Button} from '@material-ui/core'

export const LogoContainer = styled.div`
    width: 102px;
    height: 43px;
    margin-left: 165px;
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

export const LoginButton = styled(Button)`
    border: 1px solid ${props => props.theme.color.blue};
    box-sizing: border-box;
    margin: 0px 14px;

    height: 40px;
    width: 100px;
    border: 1px solid ${props => props.theme.color.blue};
    border-radius: 8px;
    align-items: center;
    & .MuiButton-label{
        width: 38px;
        height: 20px;
        font-family: ${props => props.theme.fontFamily};
        font-style: ${props => props.theme.fontStyle};
        font-weight: bold;
        font-size: 14px;
        line-height: 20px;
        color: ${props => props.theme.color.blue};
    }
    &.MuiButton-root{
        text-transform: none;
    }
    &:hover{
        background-color: ${props => props.theme.color.blue};
    }
`

export const SignUpButton = styled(Button)`
    height: 40px;
    width: 100px;
    border-radius: 8px;
    background: ${props => props.theme.color.blue};
    border: 1px solid ${props => props.theme.color.blue};
    align-items: center;
    & .MuiButton-label{
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
    }
    &.MuiButton-root{
        text-transform: none;
    }
    &:hover{
        background-color: ${props => props.theme.color.blue};
    }
`

export const Circle = styled.div`
    width: 40px;
    height: 40px;
    background: red;
    border-radius: 50%;
    margin-left: 16px;
    margin-right: 12px;
    margin-top: -10px;
`

export const Label = styled.label`
    font-family: ${props => props.theme.fontFamily};
    font-style: ${props => props.theme.fontStyle};
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    width: auto;
    height: 20px;
    font-feature-settings: 'liga' off;
    padding-right: 32px;

    color: ${props => props.theme.color.gray};
`

export const ExitContainer = styled.div`
    height: 16px;
    width: 17px;
    margin-left: 18px;
    margin-right: 168px;
`

export const NameContainer = styled.div`
    font-family: ${props => props.theme.fontFamily};
    font-style: ${props => props.theme.fontStyle};
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    padding-right: 14px;
    border-right: 1px solid ${props => props.theme.color.redWhite};
    font-feature-settings: 'liga' off;
    height: 24px;
    color: #231F20;
`