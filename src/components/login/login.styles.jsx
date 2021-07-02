import { TextField } from "@material-ui/core";
import styled from "styled-components";

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