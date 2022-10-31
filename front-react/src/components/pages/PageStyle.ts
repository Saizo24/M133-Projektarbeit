import { SxProps } from "@mui/material";

const defaultPageStyle: SxProps = {
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

const galleryStyle: SxProps = {
    backgroundColor: "white",
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"

}

export default { defaultPageStyle, loginPageStyle, browserPageStyle, galleryStyle }