import { StylesProvider } from '@material-ui/styles'
import { useFormik } from 'formik'
import React from 'react'
import { 
    ConfirmPasswordInput,
    ConfrirmPasswordLabel,
    EmailInput,
    EmailLabel,
    LoginText, 
    PasswordInput, 
    PasswordLabel, 
    SignUpButton, 
    SignUpText, 
    SignUpTextInButton, 
    ToggleLogin, 
    ToggleSignUp, 
    Window,
    Text,
    Square
} from './signup.styles'
import SignUpSchema from './signup.validation-schema'

const SignUp = () => {
    const formik = useFormik({
        initialValues:{
            email: '',
            password: '',
            confirmPassword: ''
        },
        onSubmit: values => {
            console.log(values)
        },
        validationSchema: SignUpSchema,
    })
    return (
        <StylesProvider injectFirst>
        <Window>
                <LoginText>Login</LoginText>
                <SignUpText>SignUp</SignUpText>
                <ToggleLogin/>
                <ToggleSignUp/>
                <form onSubmit={formik.handleSubmit}>
                    <EmailLabel>Email</EmailLabel>
                    <EmailInput
                        id="email"
                        name="email"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        placeholder="email"
                        {...formik.getFieldProps('email')}
                        variant="outlined"
                        error={Boolean(formik.errors.email)}
                    />
                    <PasswordLabel>Password</PasswordLabel>
                    <PasswordInput
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        {...formik.getFieldProps('password')}
                        placeholder="password"
                        variant="outlined"
                        error={Boolean(formik.errors.password)}
                    />
                    <ConfrirmPasswordLabel>Confirm Password</ConfrirmPasswordLabel>
                    <ConfirmPasswordInput
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.confirmPassword}
                        {...formik.getFieldProps('confirmPassword')}
                        placeholder="Confirm password"
                        variant="outlined"
                        error={Boolean(formik.errors.confirmPassword)}
                    />
                    <Square></Square>
                    <Text>
                        By creating an account you agree to the terms and conditions applicable to our service and acknowledge 
                        that your personal data will be used in accordance with our privacy policy and 
                        you will receive emails and communications about jobs, industry news, new products and related topics.
                    </Text>
                    <SignUpButton type="submit"><SignUpTextInButton>Sign up</SignUpTextInButton></SignUpButton>
                </form>
        </Window>
        </StylesProvider>
    )
}

export default SignUp
