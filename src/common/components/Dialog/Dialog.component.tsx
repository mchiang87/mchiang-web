import React from 'react';
import {
  Button,
  Dialog as MaterialDialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

import { DialogProps } from './Dialog.types';

/**
 * A reusable component that allows you to pop up a message for user
 * interaction.
 *
 * @param props - The component's props
 */
export const Dialog = (props: DialogProps): JSX.Element => {
  const {
    id,
    open,
    onClose,
    title = '',
    content = '',
    closeText = '',
  } = props;

  return (
    <MaterialDialog
      id={id}
      open={open}
      onClose={onClose}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={onClose} autoFocus>{closeText}</Button>
      </DialogActions>
    </MaterialDialog>
  );
};
