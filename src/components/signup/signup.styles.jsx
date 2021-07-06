import { TextField } from "@material-ui/core";
import styled from "styled-components";

export const Window = styled.div`
    width: 496px;
    height: 684px;
    background: #F5F7FA;
    border-radius: 8px;
`

export const SignUpText = styled.div`

    font-family: Manrope;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;

    font-feature-settings: 'liga' off;

    color: #2E1AAD;
`

export const LoginText = styled.div`

    font-family: Manrope;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 26px;

    font-feature-settings: 'liga' off;
    margin-right: 71px;

    color: #999999;
`

export const Label = styled.label`

    font-family: Manrope;
    font-style: normal;
    font-weight: 800;
    font-size: 12px;
    line-height: 22px;

    font-feature-settings: 'liga' off;

    color: #999999;
`

export const Input = styled(TextField)`
    height: 52px;
    width: 400px;
    border-radius: 8px;

    background: #FFFFFF;

    & .MuiOutlinedInput-root{
        border-radius: 8px;
    }
`


export const SignUpButton = styled.button`

    height: 52px;
    width: 400px;
    border-radius: 8px;

    background: #2E1AAD;
    border: 1px solid #2E1AAD;
    border-radius: 8px;
`

export const SignUpTextInButton = styled.div`
    width: 58px;
    height: 20px;

    font-family: Manrope;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;

    text-align: center;
    font-feature-settings: 'liga' off;

    color: #FFFFFF;
`

export const Text = styled.div`
    width: 372px;
    height: 144px;

    font-family: Manrope;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;

    font-feature-settings: 'liga' off;

    color: #231F20;
`

export const Square = styled.div`
    width: 18px;
    height: 18px;

    border: 1px solid #C4C4C4;
    box-sizing: border-box;
    border-radius: 2px;
`