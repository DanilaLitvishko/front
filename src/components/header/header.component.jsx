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
    NameContainer,
    useStyles
} from './header.styles'
import { selectCurrentUser, selectImage } from '../../redux/user/user.selectors';
  
const Header = () => {
    const classes = useStyles();
    const currentUser = useSelector(selectCurrentUser)
    const image = useSelector(selectImage)
    console.log(currentUser)
    return(
        <>
            <Grid container spacing={3} alignItems="center" className={classes.ma}>
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
                    <div className={classes.userInfo}>
                        <Label>For Employers</Label>
                        <Label>For Headhunters</Label>
                        {
                            image?<Circle src={require(`../../assets/${image}`).default}/>
                            :<Circle/>
                        }
                        <NameContainer>{currentUser}</NameContainer>
                        <ExitContainer><Exit/></ExitContainer>
                    </div>
                    :<Grid item md={4}>
                        <LoginButton>Login</LoginButton>
                        <SignUpButton>Signup</SignUpButton>
                    </Grid>
                }
            </Grid>
            <Line/>
        </>
)}

export default Header;