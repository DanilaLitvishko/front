import React from 'react'
import { SignUpText, ToggleLogin, ToggleSignUp, Window } from './signup.styles'

const SignUp = () => {
    return (
        <Window>
            <SignUpText>SignUp</SignUpText>
            <ToggleLogin/>
            <ToggleSignUp/>
        </Window>
    )
}

export default SignUp
