import React from 'react'
import { Button, Thanks, Window, String, ButtonText} from './confirm-registration.styles'

const ConfirmRegistration = () => {
    return (
        <Window>
            <Thanks>Thank you for registering</Thanks>
            <String>Please check your email to confirm your account</String>
            <Button><ButtonText>Resend Email Confirmation</ButtonText></Button>
        </Window>
    )
}

export default ConfirmRegistration
