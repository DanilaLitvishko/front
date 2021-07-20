import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid';
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import {Redirect} from 'react-router-dom'

import {
    Input,
    Label,
    SignUpButton,
    SignUpTextInButton
} from './login.styles'
import LoginSchema from './login.validation-schema'
import {login} from '../../redux/user/user.actions'

const Login = () => {

    const [isLogged, setIsLogged] = useState(false);

    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues:{
            email: '',
            password: '',
        },
        onSubmit: async values => {
            dispatch(login(values))
            setIsLogged(true)
        },
        validationSchema: LoginSchema,
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
                <SignUpButton type="submit">
                    <SignUpTextInButton>
                        Login
                    </SignUpTextInButton>
                </SignUpButton>
            </Grid>
            {
                isLogged?<Redirect to={{
                    pathname:"/completeProfile",
                    state:{email: formik.values.email}
                }}/>
                :null
            }
        </form>
    )
}

export default Login
