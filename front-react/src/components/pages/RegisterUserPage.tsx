import { Box } from "@mui/material";
import React from "react";
import LoginTitle from "../molecules/loginTitle/LoginTitle";
import RegisterBox from "../organisms/registerBox/RegisterBox";
import PageStyle from "./PageStyle";

type Props = {};

const LoginPage = ({}: Props) => {
  return (
    <Box sx={{ ...PageStyle.defaultPageStyle, ...PageStyle.loginPageStyle }}>
      <LoginTitle></LoginTitle>
      <RegisterBox></RegisterBox>
    </Box>
  );
};

export default LoginPage;
