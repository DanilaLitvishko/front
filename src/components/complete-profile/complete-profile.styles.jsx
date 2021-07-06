import { TextField } from '@material-ui/core'
import styled from 'styled-components'

export const Window = styled.div`
    display: flex;
    width: 994px;
    height: 1072px;
    flex-direction: column;
    background: #F5F7FA;
    border-radius: 8px;
    padding: 12px;
`
export const UpdateText = styled.div`
    display: flex;
    width: 155px;
    height: 22px;
    margin: 12px;

    font-family: Manrope;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 22px;
`

export const Input = styled(TextField)`
    display: flex;
    height: 57px;
    width: 400px;
    margin: 12px;

    background: #FFFFFF;
    border: 1px solid #DDDDDD;
    box-sizing: border-box;
    border-radius: 8px;
`

export const Label = styled.div`
    margin: 12px;
    display: flex;
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
    margin: 12px;
    display: flex;
    width: 92px;
    height: 22px;

    font-family: Manrope;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;

    color: #000000;
`

export const SaveButton = styled.button`
    height: 47px;
    width: 120px;

    background: #2E1AAD;
    border: 1px solid #2E1AAD;
    border-radius: 8px;
`

export const SaveTextInButton = styled.div`
    width: 39px;
    height: 22px;

    font-family: Manrope;
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 22px;

    color: #FFFFFF;
`