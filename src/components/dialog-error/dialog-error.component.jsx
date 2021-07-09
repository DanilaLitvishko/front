import React from 'react'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

const DialogError = (props) => {
    const { open } = props
    return (
        <Dialog aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Вы знали, что вы пидор?</DialogTitle>
        </Dialog>
    )
}

export default DialogError
