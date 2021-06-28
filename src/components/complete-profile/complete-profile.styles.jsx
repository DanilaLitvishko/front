import { TextField } from '@material-ui/core'
import styled from 'styled-components'

export const Window = styled.div`
    position: absolute;
    width: 994px;
    height: 1072px;

    background: #F5F7FA;
    border-radius: 8px;
`
export const UpdateText = styled.div`
    width: 155px;
    height: 22px;

    font-family: Manrope;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 22px;
`

export const Input = styled(TextField)`
    height: 52px;
    width: 400px;

    background: #FFFFFF;
    border: 1px solid #DDDDDD;
    box-sizing: border-box;
    border-radius: 8px;
`

export const Label = styled.div`
    width: 88px;
    height: 22px;

    font-family: Manrope;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;

    color: #000000;
`

export const AddPosition = styled.div`
    width: 92px;
    height: 22px;

    font-family: Manrope;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;

    color: #000000;
`