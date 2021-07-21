import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid';
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import {Redirect} from 'react-router-dom'

import {
    Input,
    Label,
    LoginButton,
} from './login.styles'
import LoginSchema from './login.validation-schema'
import {login} from '../../redux/user/user.actions'
import {UserPayload} from '../../interfaces/user-payload.interface'

const Login = () => {

    const [isLogged, setIsLogged] = useState(false);

    const dispatch = useDispatch();

    const {values, getFieldProps, handleChange, errors, handleSubmit} = useFormik({
        initialValues:{
            email: '',
            password: '',
        },
        onSubmit: async (values:UserPayload) => {
            dispatch(login(values))
            setIsLogged(true)
        },
        validationSchema: LoginSchema,
    })
    return (
        <form onSubmit={handleSubmit} style={{'marginLeft':'24px', 'marginRight':'24px', 'marginTop':'25px'}}>
            <Grid container direction="column" spacing={1}>
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
                <Grid item style={{'marginBottom': '40px'}}>
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
                <LoginButton type="submit">
                        Login
                </LoginButton>
            </Grid>
            {
                isLogged?<Redirect to={{
                    pathname:"/completeProfile",
                    state:{email: values.email}
                }}/>
                :null
            }
        </form>
    )
}

export default Login
