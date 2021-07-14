import React, {useEffect} from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import { ReactComponent as Pencil } from '../../assets/pencil.svg'
import Switch from '@material-ui/core/Switch';

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
    LineContainer
} from './profile.styles'

const AntSwitch = withStyles((theme) => ({
    root: {
      width: 28,
      height: 16,
      padding: 0,
      display: 'flex',
    },
    switchBase: {
      padding: 2,
      color: theme.palette.grey[500],
      '&$checked': {
        transform: 'translateX(12px)',
        color: theme.palette.common.white,
        '& + $track': {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
          borderColor: theme.palette.primary.main,
        },
      },
    },
    thumb: {
      width: 12,
      height: 12,
      boxShadow: 'none',
    },
    track: {
      border: `1px solid ${theme.palette.grey[500]}`,
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: theme.palette.common.white,
    },
    checked: {},
  }))(Switch);

const StyledTabs = withStyles({
    indicator: {
        left:'0px',
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      '& > span': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: '#635ee7',
      },
    },
  })((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);
  
  const StyledTab = withStyles((theme) => ({
    root: {
      textTransform: 'none',
      color: 'black',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      '&:focus': {
        opacity: 1,
      },
    },
  }))((props) => <Tab disableRipple {...props} />);

const Profile = () => {

    console.log(axios.defaults.headers.common['Authorization'] )

    const [value, setValue] = React.useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await axios.get('http://localhost:3001/user-info')
                console.log(res)
            }
            catch(error){}
        }
        
        fetchData();
    }, [])

    const handleChange = (event, newValue) => {
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
            <AboutYouContainer>
                <Heading>
                    About you
                    <AngleText>
                    <PencilContainer><Pencil/></PencilContainer>
                        Edit
                    </AngleText>
                </Heading>
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
                <NotificationText>
                    Weekly summary of applications
                </NotificationText>
                <NotificationLine/>
                <NotificationText>
                    Invitations
                </NotificationText>
            </NotificationsContainer>
        </Window>
    )
}

export default Profile
