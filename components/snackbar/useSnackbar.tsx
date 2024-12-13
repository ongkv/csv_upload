import { createContext, JSX, useContext, useState } from "react";
import { SimpleSnackbar as Snackbar } from "@/components/snackbar/SimpleSnackbar";

type ShowMessageType = ({
  message,
  error,
}: {
  message: string;
  error?: boolean;
}) => void;

type SnackbarContextType = {
  showMessage: ShowMessageType;
};

const SnackbarContext = createContext({} as SnackbarContextType);

type SnackbarProviderProps = {
  children: JSX.Element;
};

export function SnackbarProvider({ children }: SnackbarProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const showMessage: ShowMessageType = ({ message, error = false }) => {
    setIsOpen(true);
    setMessage(message);
    setIsError(error);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <SnackbarContext.Provider value={{ showMessage }}>
        {children}
      </SnackbarContext.Provider>
      <Snackbar
        message={message}
        open={isOpen}
        handleClose={handleClose}
        error={isError}
      />
    </>
  );
}

export function useSnackbar() {
  return useContext(SnackbarContext);
}
