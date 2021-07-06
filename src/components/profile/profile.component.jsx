import React from 'react'
import { TabsContainer, Window } from './profile.styles'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const Profile = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <Window>
            <div>
                <TabsContainer>
                    <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                    >
                        <Tab label="My Profile"/>
                        <Tab label="Requsted Support"/>
                        <Tab label="Roles"/>
                    </Tabs>
                </TabsContainer>
            </div>
            <div>About you</div>
            <div>Specialities</div>
            <div>Subscription</div>
            <div>Invoices</div>
            <div>Notifications</div>
        </Window>
    )
}

export default Profile
