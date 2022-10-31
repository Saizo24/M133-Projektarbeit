import React, { createContext, useState } from "react";
import MySnackBar from "../../../atoms/snackbars/MySnackBar";

type SnackBarContextType = {
  text: string;
  open: boolean;
  variant: "error" | "success" | "warning" | "info";
  close: () => void;
  showSnackBar: (text: string, variant: SnackBarContextType["variant"]) => void;
};

const noContextProviderFound = () => {
  throw new Error("No provider for the SnackBarContext found");
};

const defaultSnackBarContext: SnackBarContextType = {
  text: "",
  open: false,
  variant: "info",
  close: () => {
    return false;
  },
  showSnackBar: noContextProviderFound,
};

const SnackBarContext = createContext<SnackBarContextType>(defaultSnackBarContext);
export default SnackBarContext;

type SnackbarContextProviderProps = {
  children: React.ReactNode;
};

export const SnackbarContextProvider = ({ children }: SnackbarContextProviderProps) => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [variant, setVariant] = useState<SnackBarContextType["variant"]>("info");
  const close = () => {
    setOpen(false);
  };

  const showSnackBar = (shownText: string, shownVariant: SnackBarContextType["variant"]) => {
    setOpen(true);
    setText(shownText);
    setVariant(shownVariant);
  };

  return (
    <SnackBarContext.Provider
      value={{
        open,
        text,
        variant,
        close,
        showSnackBar,
      }}
    >
      <MySnackBar text={text} variant={variant} open={open} close={close} />
      {children}
    </SnackBarContext.Provider>
  );
};
