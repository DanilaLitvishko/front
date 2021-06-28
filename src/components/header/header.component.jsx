import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { makeStyles } from "@material-ui/core/styles";

import {
    HeaderContainer,  
    MenuItem, 
    Line,
    LoginButton,
    Login,
    SignUpButton,
    SignUp,
    LogoContainer,
} from './header.styles'
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    textAlign: {
        textAlign: 'left',
    },
}))
  
const Header = () => {
    const classes = useStyles();
    return(
            <HeaderContainer
                container
                direction="row"
                alignItems="center"
            >
                <LogoContainer item >
                    <Logo/>
                </LogoContainer>
                <MenuItem item >
                    Home
                </MenuItem>
                <MenuItem item>
                    News
                </MenuItem>
                <MenuItem item >
                    About
                </MenuItem>
                <Grid item >
                    <LoginButton><Login>Login</Login></LoginButton>
                </Grid>
                <Grid item >
                    <SignUpButton><SignUp>Sign up</SignUp></SignUpButton>
                </Grid>
            </HeaderContainer>
)}

export default Header;