import React from 'react'
import Grid from '@material-ui/core/Grid';
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'

import {
    Input,
    Label,
    SignUpButton,
    SignUpTextInButton
} from './login.styles'
import LoginSchema from './login.validation-schema'
import {login} from '../../redux/user/user.actions'
import {UserPayload} from '../../interfaces/user-payload.interface'

const Login = () => {

    const dispatch = useDispatch();

    const {values, getFieldProps, handleChange, errors, handleSubmit} = useFormik({
        initialValues:{
            email: '',
            password: '',
        },
        onSubmit: async (values:UserPayload) => {
            dispatch(login(values))
        },
        validationSchema: LoginSchema,
    })
    return (
        <form onSubmit={handleSubmit}>
            <Grid container direction="column" alignItems="center" spacing={1}>
                <Grid item><Label>Email</Label></Grid>
                    <Grid item>
                        <Input
                            {...getFieldProps('email')}
                            id="email"
                            name="email"
                            type="text"
                            onChange={handleChange}
                            value={values.email}
                            placeholder="email"
                            variant="outlined"
                            error={Boolean(errors.email)}
                        />                    
                    </Grid>
                <Grid item><Label>Password</Label></Grid>
                <Grid item>
                    <Input
                        {...getFieldProps('password')}
                        id="password"
                        name="password"
                        type="password"
                        onChange={handleChange}
                        value={values.password}
                        placeholder="password"
                        variant="outlined"
                        error={Boolean(errors.password)}
                    />
                </Grid>
                <SignUpButton type="submit">
                    <SignUpTextInButton>
                        Login
                    </SignUpTextInButton>
                </SignUpButton>
            </Grid>
        </form>
    )
}

export default Login
