import React, {useEffect, useState} from 'react'

import { 
  TabsContainer, 
  Window,
} from './profile.styles'
import StyledTab from '../styled-tab/styled-tab.component';
import StyledTabs from '../styled-tabs/styled-tabs.component';
import AboutYou from '../about-you/about-you.component'
import Specialities from '../specialities/specialities.component'
import Subscription from './subscription.component'
import Notification from './notification.component'
import Invoices from './invoices.component'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserInfoStart } from '../../redux/user/user.actions';
import { selectUserInfo } from '../../redux/user/user.selectors';
import { UserInfo } from '../../interfaces/user-info.interface';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [value, setValue] = useState(0);
    const dispatch = useDispatch();
    const userInfo:UserInfo | null = useSelector(selectUserInfo);
    useEffect(() => {
      dispatch(fetchUserInfoStart())
    }, [dispatch])

    const handleChange = (event:React.ChangeEvent<{}>, newValue:number) => {
      setValue(newValue);
    };
    return (
      <Window>
          <TabsContainer>
            <StyledTabs 
              value={value} 
              onChange={handleChange} 
              aria-label="styled tabs example" 
              orientation="vertical"
            >
              <StyledTab label="My Profile" />
              <StyledTab label="Requsted Support" />
              <StyledTab label="Roles" />
            </StyledTabs>
        </TabsContainer>
      <AboutYou name={userInfo?.data.name} phoneNumber={userInfo?.data.phoneNumber} email={userInfo?.data.email} image={userInfo?.data.image}/>
      <Specialities specialities={userInfo?.data.specialities} userInfoId={userInfo?.data.id}/>
      <Subscription/>
      <Invoices/>
      <Notification/>
      <Link to='/complete-profile'>Complete Profile</Link>
    </Window>
  )
}

export default Profile
