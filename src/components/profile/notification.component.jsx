import React from 'react'

import { 
    NotificationsContainer,  
    Heading,
    NotificationText,
    NotificationLine,
    SwitchContainer,
    LineContainer,
    AntSwitch,
  } from './profile.styles'

const Notification = () => {
    return (
        <NotificationsContainer>
            <Heading style={{'marginTop': '20px'}}>
                Notifications
            </Heading>
            <NotificationLine/>
            <LineContainer>
                <NotificationText>
                    Receive notification on application updates
                </NotificationText>
                <SwitchContainer>
                    <AntSwitch/>
                </SwitchContainer>
            </LineContainer>
            <NotificationLine/>
            <LineContainer>
                <NotificationText>
                    Weekly summary of applications
                </NotificationText>
                <SwitchContainer>
                    <AntSwitch/>
                </SwitchContainer>
            </LineContainer>
            <NotificationLine/>
            <LineContainer>
                <NotificationText>
                    Invitations
                </NotificationText>
                <SwitchContainer>
                    <AntSwitch/>
                </SwitchContainer>
            </LineContainer>
        </NotificationsContainer>
    )
}

export default Notification
