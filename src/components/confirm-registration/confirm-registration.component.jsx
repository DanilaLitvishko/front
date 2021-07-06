import React from 'react'
import { Button, Thanks, Window, String, ButtonText} from './confirm-registration.styles'
import {ReactComponent as Logo} from '../../assets/icon.svg'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    logoContainer:{
        marginBottom: '20px',
    },
    textContainer:{
        marginTop:'8px',
    },
    buttonContainer:{
        marginTop: '42px',
    }
}))

const ConfirmRegistration = () => {
    const classes = useStyles();
    return (
        <Window>
            <Logo className={classes.logoContainer}/>
            <Thanks>Thank you for registering</Thanks>
            <String className={classes.textContainer}>Please check your email to confirm your account</String>
            <Button className={classes.buttonContainer}><ButtonText>Resend Email Confirmation</ButtonText></Button>
        </Window>
    )
}

export default ConfirmRegistration
