import React, {useState} from 'react'

import { Window, AntTab, AntTabs } from './auth.styles'
import SignUp from '../signup/signup.component';
import Login from '../login/login.component';
import TabPanel from '../tab-panel/tab-panel.component'

const Auth = () => {
    const [value, setValue] = useState(1);

    const handleChange = (event:React.ChangeEvent<{}>, newValue:number) => {
        setValue(newValue);
    };
    
    return (
        <Window>
            <AntTabs value={value} onChange={handleChange} aria-label="ant example">
                <AntTab label="Login"/>
                <AntTab label="Sign up"/>
            </AntTabs>
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
