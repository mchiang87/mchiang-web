type CallbackFunction = (value: undefined | null | string | number | boolean) => void;
export interface DialogProps {
  // required
  id: string; // this sets the id AND data-testid of the Dialog
  onClose: CallbackFunction;
  open: boolean;

  // optional
  closeText?: string;
  content?: string;
  title?: string;
}
