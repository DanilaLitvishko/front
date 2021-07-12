import React from 'react'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

const DialogError = (props) => {
    const { open, close } = props
    return (
        <Dialog  aria-labelledby="alert-dialog-title" open={open} onClose={close}>
            <DialogTitle id="simple-dialog-title">Wrong email domain!</DialogTitle>
        </Dialog>
    )
}

export default DialogError
