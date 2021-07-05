import React, {useState} from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar'
import { Window } from './auth.styles'
import SignUp from '../signup/signup.component';
import Login from '../login/login.component';
import TabPanel from '../tab-panel/tab-panel.component'

const Auth = () => {
    const [value, setValue] = useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    return (
        <Window>
            <AppBar position="static" color="default">
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
            </AppBar>
            <TabPanel value={value} index={0}>
                <Login/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <SignUp/>    
            </TabPanel>
        </Window>
    )
}

export default Auth
