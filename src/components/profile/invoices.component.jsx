import React from 'react'

import { 
    InvoicesContainer,
    Heading,
    ViewAllText,
    HeadingContainer,
    InvoicesLine
} from './profile.styles'

const Invoices = () => {
    return (
        <InvoicesContainer>
            <HeadingContainer>
                <Heading>
                    Invoices
                    <ViewAllText>View all</ViewAllText>
                </Heading>
            </HeadingContainer>
            <InvoicesLine/>
        </InvoicesContainer>
    )
}

export default Invoices
