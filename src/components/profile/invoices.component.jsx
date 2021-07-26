import React from 'react'

import { 
    InvoicesContainer,
    Heading,
    ViewAllText,
    HeadingContainer,
} from './profile.styles'
import { useInfoFromBackend } from '../../hooks/useInfoFromBackend.hook';
import Invoice from './invoice.component'

const Invoices = () => {
    const loadInvoices = useInfoFromBackend('http://localhost:3001/payment')
    console.log(loadInvoices.data)
    return (
        <InvoicesContainer>
            <HeadingContainer>
                <Heading>
                    Invoices
                    <ViewAllText>View all</ViewAllText>
                </Heading>
                {
                    loadInvoices.isLoading?
                    console.log(loadInvoices.data)
                    :null
                }
            </HeadingContainer>
        </InvoicesContainer>
    )
}

export default Invoices
