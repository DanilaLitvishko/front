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

    const formik = useFormik({
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
        <form onSubmit={formik.handleSubmit}>
            <Grid container direction="column" alignItems="center" spacing={1}>
                <Grid item><Label>Email</Label></Grid>
                    <Grid item>
                        <Input
                            {...formik.getFieldProps('email')}
                            id="email"
                            name="email"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            placeholder="email"
                            variant="outlined"
                            error={Boolean(formik.errors.email)}
                        />                    
                    </Grid>
                <Grid item><Label>Password</Label></Grid>
                <Grid item>
                    <Input
                        {...formik.getFieldProps('password')}
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        placeholder="password"
                        variant="outlined"
                        error={Boolean(formik.errors.password)}
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
