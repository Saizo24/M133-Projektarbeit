import { SxProps } from "@mui/material";

const defaultPageStyle: SxProps = {
    minHeight: "100vh",
    minWidth: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "skyblue",
    overflow: "hidden"
}

const loginPageStyle: SxProps = {
    paddingTop: 3,
}

const browserPageStyle: SxProps = {
    marginTop: "70px",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    gap: 2
}

const browserGalleryPageStyle: SxProps = {
    border: "1px solid black",
    borderRadius: "5px"
}

const galleryStyle: SxProps = {
    marginTop: "70px",
    backgroundColor: "white",
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1
}

export default { defaultPageStyle, loginPageStyle, browserPageStyle, browserGalleryPageStyle, galleryStyle }