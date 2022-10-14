import { SxProps } from "@mui/material"
import { borderRadius } from "@mui/system"

const loginBoxStyle: SxProps = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "white",
    width: "80%",
    height: "50%",
    maxWidth: "500px",
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: "10px"
}

const loginFieldStyle: SxProps = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    flex: 1,
}

const loginButtonStyle: SxProps = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    flex: 0.5,
}

export default { loginBoxStyle, loginFieldStyle, loginButtonStyle }