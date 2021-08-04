import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import StripeCheckoutButton from '../stripe-button/stripe-button.component'

const DialogProducts = ({ open, close, products, price }) => {
	return (
		<Dialog  aria-labelledby="alert-dialog-title" open={open} onClose={close} maxWidth={300}>
			<DialogTitle id="simple-dialog-title">Total price</DialogTitle>
            <span>Your total price is {price}$</span>
            <StripeCheckoutButton price={price}/>
		</Dialog>
	);
};

export default DialogProducts;
