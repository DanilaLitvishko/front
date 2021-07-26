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

  import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    heading:{
        marginTop: '20px',
    },
})

const Notification = () => {
    const classes = useStyles();
    return (
        <NotificationsContainer>
            <Heading className={classes.heading}>
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
