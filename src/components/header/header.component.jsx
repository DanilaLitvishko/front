import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';

import {
    MenuItem, 
    Line,
    LoginButton,
    Login,
    SignUpButton,
    SignUp,
    LogoContainer,
} from './header.styles'

const useStyles = makeStyles((theme) => ({
    logoContainer:{
        margin: '10px',
    },
    homeText:{
        textAlign:'end',
    },
    newsText:{
        textAlign:'center',
    }
}))
  
const Header = () => {
    const classes = useStyles();
    return(
        <>
            <Grid container spacing={3} alignItems="center">
                <Grid item md>
                <LogoContainer className={classes.logoContainer}><Logo/></LogoContainer>
                </Grid>
                <Grid item md>
                <MenuItem className={classes.homeText}> Home </MenuItem>
                </Grid>
                <Grid item md>
                <MenuItem className={classes.newsText}> News </MenuItem>
                </Grid>
                <Grid item md={8}>
                <MenuItem>About</MenuItem>
                </Grid>
                <Grid item md>
                    <LoginButton><Login>Login</Login></LoginButton>
                </Grid>
                <Grid item md>
                <SignUpButton><SignUp>Signup</SignUp></SignUpButton>
                </Grid>
            </Grid>
            <Line/>
        </>
)}

export default Header;