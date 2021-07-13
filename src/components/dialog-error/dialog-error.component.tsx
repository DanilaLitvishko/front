import React from 'react'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { DialogErrorProps } from '../../interfaces/dialog-error-props.interface';

const DialogError = (props: DialogErrorProps) => {
    const { open, close } = props
    return (
        <Dialog  aria-labelledby="alert-dialog-title" open={open} onClose={close}>
            <DialogTitle id="simple-dialog-title">Wrong email domain!</DialogTitle>
        </Dialog>
    )
}

export default DialogError
