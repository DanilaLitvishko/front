import React from 'react';

import { 
	InvoicesContainer,
	Heading,
	ViewAllText,
	HeadingContainer,
} from './invoices.styles';
import { useInfoFromBackend } from '../../hooks/useInfoFromBackend.hook';
import Invoice from './invoice.component';

const Invoices = () => {
	const loadInvoices = useInfoFromBackend('http://localhost:3001/payment');
	return (
		<InvoicesContainer>
			<HeadingContainer>
				<Heading>
                    Invoices
					<ViewAllText>View all</ViewAllText>
				</Heading>
			</HeadingContainer>
			{
				loadInvoices.data?
					loadInvoices.data.map(item => <Invoice date={item.date}/>)
					:null
			}
		</InvoicesContainer>
	);
};

export default Invoices;
