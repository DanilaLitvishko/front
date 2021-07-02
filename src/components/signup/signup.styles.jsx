import { TextField } from "@material-ui/core";
import styled from "styled-components";

export const Label = styled.label`

    font-family: Manrope;
    font-style: normal;
    font-weight: 800;
    font-size: 12px;
    line-height: 22px;
    font-feature-settings: 'liga' off;
    color: ${props => props.theme.color.gray};
`

export const Input = styled(TextField)`
    height: 52px;
    width: 400px;
    border-radius: 8px;
    background: ${props => props.theme.color.white};
    & .MuiOutlinedInput-root{
        border-radius: 8px;
    }
`

export const SignUpButton = styled.button`
    height: 52px;
    width: 400px;
    border-radius: 8px;
    background: ${props => props.theme.color.blue};
    border: 1px solid ${props => props.theme.color.blue};
    border-radius: 8px;
`

export const SignUpTextInButton = styled.div`
    font-family: ${props => props.theme.fontFamily};
    font-style: ${props => props.theme.fontStyle};
    width: 58px;
    height: 20px;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    font-feature-settings: 'liga' off;
    color: ${props => props.theme.color.white};
`

export const Text = styled.div`
    font-family: ${props => props.theme.fontFamily};
    font-style: ${props => props.theme.fontStyle};
    width: 372px;
    height: 144px;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    font-feature-settings: 'liga' off;
    color: ${props => props.theme.color.redBlack};
`

export const Square = styled.div`
    width: 18px;
    height: 18px;
    border: 1px solid ${props => props.theme.color.grayRed};
    box-sizing: border-box;
    border-radius: 2px;
`