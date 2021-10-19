import React from 'react';
import { Button, Dialog, DialogContentText, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';

const DeleteConfirmationDialog = (props) => {

    return(
        <Dialog
            open={props.open}
            keepMounted
            onClose={props.handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{"Delete Schedule"}</DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
                Would you like to delete this schedule?
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={props.handleClose}>Cancel</Button>
            <Button onClick={props.onConfirm}>Confirm</Button>
            </DialogActions>
        </Dialog>
        )
}

export default DeleteConfirmationDialog;