import React, {useState} from 'react'
import SignUpSchema from '../signup/signup.validation-schema'
import { signUpStart } from '../../redux/user/user.actions';
import {Redirect} from 'react-router-dom'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import Grid from '@material-ui/core/Grid';
import {
    Input,
    Label,
    Square,
    Text,
    SignUpButton,
    SignUpTextInButton
} from './signup.styles'

const SignUp = () => {
    const [signUp, setSignUp] = useState(false);

    const dispatch = useDispatch();
    
    const formik = useFormik({
        initialValues:{
            email: '',
            password: '',
            confirmPassword: ''
        },
        onSubmit: async values => {
            dispatch(signUpStart(values));
            setSignUp(true)
        },
        validationSchema: SignUpSchema,
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container direction="column" alignItems="center" spacing={1}>
                <Grid item><Label>Email</Label></Grid>
                    <Grid item>
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
                    </Grid>
                <Grid item><Label>Password</Label></Grid>
                <Grid item>
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
                </Grid>
                <Grid item><Label>Confirm Password</Label></Grid>
                <Grid item>
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
                </Grid>
                <Grid item>
                    <Square/>
                    <Text>
                        By creating an account you agree to the terms and conditions applicable to our service and acknowledge 
                        that your personal data will be used in accordance with our privacy policy and 
                        you will receive emails and communications about jobs, industry news, new products and related topics.
                    </Text>
                </Grid>
                <SignUpButton type="submit">
                    <SignUpTextInButton>
                        Sign up
                    </SignUpTextInButton>
                </SignUpButton>
                {
                    signUp?<Redirect to={{
                        pathname:"/resendEmail",
                        state:{email: formik.values.email}
                    }}/>
                    :null
                }
            </Grid>
        </form>
    )
}

export default SignUp
