import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Button, Thanks, Window, String, ButtonText} from './confirm-registration.styles'

const ConfirmRegistration = () => {
    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
        >
            <Window>
                <Thanks>Thank you for registering</Thanks>
                <String>Please check your email to confirm your account</String>
                <Button><ButtonText>Resend Email Confirmation</ButtonText></Button>
            </Window>
        </Grid>
    )
}

export default ConfirmRegistration
