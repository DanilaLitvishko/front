import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { ReactComponent as Exit } from '../../assets/exit.svg'
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux'

import {
    MenuItem, 
    Line,
    LoginButton,
    SignUpButton,
    LogoContainer,
    Label,
    Circle, 
    ExitContainer,
    NameContainer
} from './header.styles'
import { selectCurrentUser } from '../../redux/user/user.selectors';

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
    const currentUser = useSelector(selectCurrentUser)
    return(
        <>
            <Grid container spacing={3} alignItems="center" style={{'flexWrap':'nowrap'}}>
                <Grid item md>
                <LogoContainer className={classes.logoContainer}><Logo/></LogoContainer>
                </Grid>
                <Grid item md>
                <MenuItem className={classes.homeText}> Home </MenuItem>
                </Grid>
                <Grid item md>
                <MenuItem className={classes.newsText}> News </MenuItem>
                </Grid>
                <Grid item md={5}>
                <MenuItem>About</MenuItem>
                </Grid>
                {
                    currentUser?
                    <div style={{'display':'flex'}}>
                        <Label>For Employers</Label>
                        <Label>For Headhunters</Label>
                        <Circle/>
                        <NameContainer>{currentUser}</NameContainer>
                        <ExitContainer><Exit/></ExitContainer>
                    </div>
                    :<Grid item md={4}>
                        <div style={{'display':'flex'}}>
                            <LoginButton>Login</LoginButton>
                            <SignUpButton>Signup</SignUpButton>
                        </div>
                    </Grid>
                }
            </Grid>
            <Line/>
        </>
)}

export default Header;