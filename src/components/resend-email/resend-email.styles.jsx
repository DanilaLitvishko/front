import styled from 'styled-components'
import {Typography} from '@material-ui/core'

export const Window = styled.div`
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    align-items: center;

    background: #F5F7FA;
    border-radius: 8px;
    width: 496px;
    height: 335px;
`

export const Thanks = styled(Typography)`
    font-weight: 800;
    font-size: 20px;
    line-height: 28px;
`

export const String = styled(Typography)`
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;

    font-feature-settings: 'liga' off;

    color: #231F20;
`

export const ButtonText = styled(Typography)`
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;

    text-align: center;
    font-feature-settings: 'liga' off;

    color: #FFFFFF;
`

export const Button = styled.button`
    height: 52px;
    width: 272px;

    background: #2E1AAD;
    border: 1px solid #2E1AAD;
    border-radius: 8px;
`