import { SxProps } from "@mui/material";

const defaultPageStyle: SxProps = {
    minHeight: "100vh",
    minWidth: "100vw",
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

const galleryStyle: SxProps = {
    backgroundColor: "white",
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1
}

export default { defaultPageStyle, loginPageStyle, browserPageStyle, galleryStyle }