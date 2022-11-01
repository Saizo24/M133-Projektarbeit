import { Box } from "@mui/material";
import React from "react";
import LoginTitle from "../molecules/loginTitle/LoginTitle";
import LoginBox from "../organisms/loginBox/LoginBox";
import PageStyle from "./PageStyle";

type Props = {};

const LoginPage = ({}: Props) => {
  return (
    <Box sx={{ ...PageStyle.defaultPageStyle, ...PageStyle.loginPageStyle }}>
      <LoginTitle></LoginTitle>
      <LoginBox></LoginBox>
    </Box>
  );
};

export default LoginPage;
