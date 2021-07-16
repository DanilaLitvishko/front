import React, {useEffect} from 'react'
import axios from 'axios';
import { ReactComponent as Pencil } from '../../assets/pencil.svg'
import Box from '@material-ui/core/Box';

import { 
    TabsContainer, 
    Window, 
    AboutYouContainer, 
    SpecialitiesContainer, 
    SubscriptionContainer, 
    InvoicesContainer,
    NotificationsContainer,  
    Heading,
    AngleText,
    PencilContainer,
    ViewAllText,
    NotificationText,
    NotificationLine,
    SwitchContainer,
    LineContainer,
  AntSwitch,
  StyledTab,
  StyledTabs,
  SubscriptionLine,
  SubscriptionTextContainer,
  ButtonContainer,
  ButtonText,
  ManageCardDetailsContainer,
  HeadingContainer
} from './profile.styles'

const Profile = () => {
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
            <AboutYouContainer>
              <HeadingContainer>
                <Heading>
                    About you
                </Heading>
                <AngleText>
                    <PencilContainer><Pencil/></PencilContainer>
                        Edit
                </AngleText>
              </HeadingContainer>
            </AboutYouContainer>
            <SpecialitiesContainer>
                <Heading>
                    Specialities
                    <ViewAllText>View all</ViewAllText>
                    <AngleText>+Add</AngleText>
                </Heading>
            </SpecialitiesContainer>
            <SubscriptionContainer>
                <Heading>
                    Subscription
                </Heading>
                <SubscriptionLine/>
                <SubscriptionTextContainer>
                  Active (£12 / month)
                </SubscriptionTextContainer>
                <SubscriptionLine/>
                <ButtonContainer><ButtonText>Cancel Subscription</ButtonText></ButtonContainer>
                <ManageCardDetailsContainer>Manage card details</ManageCardDetailsContainer>
            </SubscriptionContainer>
            <InvoicesContainer>
              <Heading>
                Invoices
              </Heading>
              <ViewAllText>View all</ViewAllText>
            </InvoicesContainer>
          <NotificationsContainer>
            <Heading>
              Notifications
            </Heading>
            <NotificationLine/>
            <LineContainer>
              <NotificationText>
                Receive notification on application updates
              </NotificationText>
              <SwitchContainer><AntSwitch/></SwitchContainer>
            </LineContainer>
            <NotificationLine/>
            <LineContainer>
              <NotificationText>
                  Weekly summary of applications
              </NotificationText>
              <SwitchContainer><AntSwitch/></SwitchContainer>
            </LineContainer>
          <NotificationLine/>
          <LineContainer>
            <NotificationText>
              Invitations
            </NotificationText>
            <SwitchContainer><AntSwitch/></SwitchContainer>
          </LineContainer>
        </NotificationsContainer>
      </Window>
    )
}

export default Profile
