import { Link } from 'react-router-dom'
import styled from 'styled-components'

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

export const Thanks = styled.div`
    font-family: Manrope;
    font-style: normal;
    font-weight: 800;
    font-size: 20px;
    line-height: 28px;
`

export const LoginButton = styled.button`
    height: 40px;
    width: 100px;

    border: 1px solid #2E1AAD;
    box-sizing: border-box;
    border-radius: 8px;

    margin: 0px 14px;
`


export const Login = styled(Link)`
    width: 38px;
    height: 20px;

    font-family: Manrope;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    color: #2E1AAD;
`