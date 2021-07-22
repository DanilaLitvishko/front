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
                    <ViewAllText style={{cursor: "pointer"}}>View all</ViewAllText>
                </Heading>
            </HeadingContainer>
            <InvoicesLine/>
        </InvoicesContainer>
    )
}

export default Invoices
