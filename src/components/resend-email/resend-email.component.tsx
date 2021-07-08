import React from 'react'
import { Button, Thanks, Window, String, ButtonText} from './resend-email.styles'
import {ReactComponent as Logo} from '../../assets/icon.svg'
import { makeStyles } from "@material-ui/core/styles";
import {useDispatch} from 'react-redux'
import { resendEmail } from '../../redux/user/user.actions';
import { LocationProps } from '../../interfaces/location-props.interface';

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

const ResendEmail = (props:LocationProps) => {

    const classes = useStyles();
    const dispatch = useDispatch();

    const resendEmailConfirmation = () => {
        dispatch(resendEmail(props.location.state.email))
    }

    return (
        <Window>
                <Logo className={classes.logoContainer}/>
                <Thanks>Thank you for registering</Thanks>
                <String className={classes.textContainer}>Please check your email to confirm your account</String>
                <Button className={classes.buttonContainer} onClick={resendEmailConfirmation}><ButtonText>Resend Email Confirmation</ButtonText></Button>
        </Window>
    )
}

export default ResendEmail;
