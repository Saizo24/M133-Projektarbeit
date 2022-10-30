import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
/**
 * Error Snack bar
 *
 * Is used on the loginPage
 */

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export interface SnackbarMessage {
  message: string;
  key: number;
}

export interface State {
  open: boolean;
  snackPack: readonly SnackbarMessage[];
  messageInfo?: SnackbarMessage;
}

export interface SnackbarProps {
  text: string;
  variant?: "error" | "success" | "warning" | "info";
  open: boolean;
  close: () => void;
}

const MySnackBar = ({ text, variant, open, close }: SnackbarProps) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={close}>
      <Alert onClose={close} severity={variant} sx={{ width: "100%" }}>
        {text}
      </Alert>
    </Snackbar>
  );
}

export default MySnackBar;
