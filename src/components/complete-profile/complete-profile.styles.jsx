import { TextField } from '@material-ui/core'
import styled from 'styled-components'

export const Window = styled.div`
    display: flex;
    width: 994px;
    height: 1072px;
    flex-direction: column;
    background: ${props => props.theme.color.blueWhite};
    border-radius: 8px;
    padding: 12px;
`
export const UpdateText = styled.div`
    display: flex;
    width: 155px;
    height: 22px;
    margin: 12px;
    font-family: ${props => props.theme.fontFamily};
    font-style: ${props => props.theme.fontStyle};
    font-weight: 800;
    font-size: 16px;
    line-height: 22px;
`

export const Input = styled(TextField)`
    display: flex;
    height: 57px;
    width: 400px;
    margin: 12px;
    background: ${props => props.theme.color.white};
    border: 1px solid  ${props => props.theme.color.redWhite};
    box-sizing: border-box;
    border-radius: 8px;
`

export const Label = styled.div`
    margin: 12px;
    display: flex;
    width: 88px;
    height: 22px;
    font-family: ${props => props.theme.fontFamily};
    font-style: ${props => props.theme.fontStyle};
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: ${props => props.theme.color.black};
`

export const AddPosition = styled.div`
    margin: 12px;
    display: flex;
    width: 92px;
    height: 22px;
    font-family: ${props => props.theme.fontFamily};
    font-style: ${props => props.theme.fontStyle};
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    color: ${props => props.theme.color.black};
`

export const SaveButton = styled.button`
    height: 47px;
    width: 120px;
    background: ${props => props.theme.color.blue};
    border: 1px solid ${props => props.theme.color.blue};
    border-radius: 8px;
`

export const SaveTextInButton = styled.div`
    width: 39px;
    height: 22px;
    font-weight: 800;
    font-size: 16px;
    line-height: 22px;
    color: ${props => props.theme.color.white};
`

export const Industrie = styled.div`
    font-family: Manrope;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    border-bottom: 1px solid #999999;
    padding: 7px;
    margin: 7px;
    width: 400px;
    &:last-child {
        border-bottom: none;
    }

    color: ${props => props.theme.color.white};
`