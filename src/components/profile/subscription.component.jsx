import React from 'react'

import { 
    SubscriptionContainer, 
    Heading,
    SubscriptionLine,
    SubscriptionTextContainer,
    ButtonContainer,
    ManageCardDetailsContainer,
} from './profile.styles'
import { makeStyles } from '@material-ui/core/styles';
import { useInfoFromBackend } from '../../hooks/useInfoFromBackend.hook';

const useStyles = makeStyles({
    heading:{
        marginTop: '20px',
    },
})

const Subscription = () => {
    const classes = useStyles();
    const loadSubscription = useInfoFromBackend('http://localhost:3001/payment/status')
    return (
        <SubscriptionContainer>
            <Heading className={classes.heading}>
                Subscription
            </Heading>
            {
                loadSubscription.isLoading?<div>Loading...</div>
                :loadSubscription.data?<div>
                    <SubscriptionLine/>
                    <SubscriptionTextContainer>
                        Active (£12 / month)
                    </SubscriptionTextContainer>
                    <SubscriptionLine/>
                    <ButtonContainer>Cancel Subscription</ButtonContainer>
                    <ManageCardDetailsContainer>Manage card details</ManageCardDetailsContainer>
                </div>
                :<div>
                    <SubscriptionLine/>
                    <SubscriptionTextContainer>
                        Inactive (£12 / month)
                    </SubscriptionTextContainer>
                    <SubscriptionLine/>
                    <ButtonContainer>Subscribe</ButtonContainer>
                    <ManageCardDetailsContainer>Manage card details</ManageCardDetailsContainer>
                </div>
            }
        </SubscriptionContainer>
    )
}

export default Subscription
