import React from "react";
import { Alert, Snackbar, SnackbarProps, Typography } from "@mui/material";
import { DEFAULT_SNACKBAR_DURATION } from "@/helpers/constants";

interface SimpleSnackbarProps extends SnackbarProps {
  error?: boolean;
  handleClose: () => void;
}

export const SimpleSnackbar = ({
  error,
  handleClose,
  message,
  ...rest
}: SimpleSnackbarProps) => {
  return (
    <Snackbar
      autoHideDuration={DEFAULT_SNACKBAR_DURATION}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      onClose={handleClose}
      {...rest}
    >
      <Alert
        onClose={handleClose}
        severity={error ? "error" : "success"}
        variant="filled"
        sx={{ width: "100% " }}
      >
        <Typography variant="body1">{message}</Typography>
      </Alert>
    </Snackbar>
  );
};
