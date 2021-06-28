import Grid from '@material-ui/core/Grid';
import { useFormik } from 'formik'
import React from 'react'
import { 
    LoginText, 
    Input, 
    Label, 
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
        <Grid
            container
            direction="column"
            spacing={12}
        >
        <Window>
            <Grid
                container
                direction="row"
            >
                <LoginText>Login</LoginText>
                <SignUpText>SignUp</SignUpText>
            </Grid>
            <Grid
                container
                direction="row"
            >
                <ToggleLogin/>
                <ToggleSignUp/>
            </Grid>
                <form onSubmit={formik.handleSubmit}>
                    <Label>Email</Label>
                    <Input
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
                    <Label>Password</Label>
                    <Input
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
                    <Label>Confirm Password</Label>
                    <Input
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
                    <Grid
                        spacing={12}
                        container
                        direction="row"
                    >
                        <Square></Square>
                        <Text>
                            By creating an account you agree to the terms and conditions applicable to our service and acknowledge 
                            that your personal data will be used in accordance with our privacy policy and 
                            you will receive emails and communications about jobs, industry news, new products and related topics.
                        </Text>
                    </Grid>
                    <SignUpButton type="submit"><SignUpTextInButton>Sign up</SignUpTextInButton></SignUpButton>
                </form>
        </Window>
        </Grid>
    )
}

export default SignUp
