import React, {useState} from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar'
import { Window } from './auth.styles'
import SignUp from '../signup/signup.component';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Login from '../login/login.component';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box span={3}>
            <Typography component={'span'}>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

const Auth = () => {
    const [value, setValue] = useState(1);

    const handleChange = (event:Event, newValue:number) => {
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
