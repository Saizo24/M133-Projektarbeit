import { SxProps } from "@mui/material";

const defaultPageStyle: SxProps = {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "skyblue",
}

const loginPageStyle: SxProps = {
    paddingTop: 3,
}

const browserPageStyle: SxProps = {

}

export default { defaultPageStyle, loginPageStyle, browserPageStyle }