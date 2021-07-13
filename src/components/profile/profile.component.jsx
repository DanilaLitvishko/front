import React, {useEffect} from 'react'
import { TabsContainer, Window } from './profile.styles'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'

import { selectCurrentUser } from '../../redux/user/user.selectors';

const Profile = () => {

    const currentUser = useSelector(selectCurrentUser);

    console.log(currentUser)

    const [value, setValue] = React.useState(0);

    // const config = {
    //     headers: {  Authorization: `Bearer ${currentUser}` }
    // }
    // const res = await axios.get('http://localhost:3001/user-info', config)
    // console.log(res)

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
