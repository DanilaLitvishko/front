import React from 'react'

import { 
    SubscriptionContainer, 
    Heading,
    SubscriptionLine,
    SubscriptionTextContainer,
    ButtonContainer,
    ButtonText,
    ManageCardDetailsContainer,
} from './profile.styles'

const Subscription = () => {
    return (
        <SubscriptionContainer>
            <Heading style={{'marginTop': '20px'}}>
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
    )
}

export default Subscription
