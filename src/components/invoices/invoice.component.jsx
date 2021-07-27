import React from 'react';
import {ReactComponent as Vector} from '../../assets/vector.svg';
import { 
	InvoicesLine,
	Text,
	DateContainer,
	MainContainer,
	InvoiceContainer 
} from './invoices.styles';

const Invoice = ({date}) => {
	return (
		<MainContainer>
			<InvoicesLine/>
			<InvoiceContainer>
				<Text>
                    Subscription
				</Text>
				<Text>
                    £12
				</Text>
				<DateContainer style={{'marginRight': '43px'}}>
					{date}
				</DateContainer>
				<div>
					<Vector/>
				</div>
			</InvoiceContainer>
		</MainContainer>
	);
};

export default Invoice;
