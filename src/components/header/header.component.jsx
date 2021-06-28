import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';

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
        <Grid container item md={2}>
            <LogoContainer item md={2}>
                <Logo/>
            </LogoContainer>
        </Grid>
        <Grid container item md={6}>
            <MenuItem item md={2}>
                Home
            </MenuItem>
            <MenuItem item md={2}>
                News
            </MenuItem>
            <MenuItem item md={2}>
                About
            </MenuItem>
        </Grid>
        <Grid container item md={4}>
            <Grid item md={2}>
                <LoginButton><Login>Login</Login></LoginButton>
            </Grid>
            <Grid item md={2}>
                <SignUpButton><SignUp>Sign up</SignUp></SignUpButton>
            </Grid>
        </Grid>
    </HeaderContainer>
)}

export default Header;