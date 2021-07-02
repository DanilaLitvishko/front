import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useFormik } from 'formik'
import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { 
    Input, 
    Label, 
    SignUpButton, 
    SignUpTextInButton, 
    Window,
    Text,
    SignUpButton,
    SignUpTextInButton
} from './signup.styles'
import SignUpSchema from './signup.validation-schema'
import { signUpStart } from '../../redux/user/user.actions';
import {Redirect} from 'react-router-dom'
import { selectError, selectLoading } from '../../redux/user/user.selectors';
import DialogError from '../dialog-error/dialog-error.component'
import { UserPayload } from '../../interfaces/user-payload.interface';

const SignUp = () => {
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError); 

    const [value, setValue] = useState(1);
    const [signUp, setSignUp] = useState(false);
    const [open, setOpen] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);

    const handleClose = () => {
        setOpen(false)
    }

    const dispatch = useDispatch();
    const handleChange = (event:React.ChangeEvent<{}>, newValue:number) => {
        setValue(newValue);
    };

    useEffect(() => {
        if(error && isRegistered && loading === false){
            setOpen(true)
        }
        
        if(isRegistered && error === undefined && loading === false){
            setSignUp(true);
        }
    }, [loading, error, isRegistered]);

    const formik = useFormik({
        initialValues:{
            email: '',
            password: '',
            confirmPassword: ''
        },
        onSubmit: (values: UserPayload) => {
            dispatch(signUpStart(values));
            setIsRegistered(true);
        },
        validationSchema: SignUpSchema,
    })

    return (
        <Window>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="Login"/>
                <Tab label="SignUp" />
            </Tabs>
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
                            error={Boolean(formik.errors.email)}
                        />                    
                    </Grid>
                    <Grid item><Label>Confirm Password</Label></Grid>
                    <Grid item>
                        <Input
                            {...formik.getFieldProps('confirmPassword')}
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            onChange={formik.handleChange}
                            value={formik.values.confirmPassword}
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
                <DialogError open={open} close={handleClose}/>
            </form>
        </Window>
    )
}

export default SignUp;
