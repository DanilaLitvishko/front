import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useFormik } from 'formik'
import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { 
    Input, 
    Label, 
    SignUpButton, 
    SignUpTextInButton, 
    Window,
    Text,
    Square
} from './signup.styles'
import SignUpSchema from './signup.validation-schema'
import { signUpStart } from '../../redux/user/user.actions';


const SignUp = () => {
    const [value, setValue] = useState(1);

    const dispatch = useDispatch()

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const formik = useFormik({
        initialValues:{
            email: '',
            password: '',
            confirmPassword: ''
        },
        onSubmit: async values => {
            dispatch(signUpStart(values));
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
                    <SignUpButton type="submit"><SignUpTextInButton>Sign up</SignUpTextInButton></SignUpButton>
                </Grid>
            </form>
        </Window>
    )
}

export default SignUp
