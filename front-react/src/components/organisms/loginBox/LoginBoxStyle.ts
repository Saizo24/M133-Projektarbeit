import { SxProps } from "@mui/material"
import { borderRadius } from "@mui/system"

const box: SxProps = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "white",
    width: "80%",
    height: "400px",
    maxWidth: "500px",
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: "10px"
}

const field: SxProps = {
    display: "flex",
    flexDirection: "column",
    flex: 8,
    gap: "20px"
}

const button: SxProps = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    flex: 0.5,
}

const header: SxProps = {
    flex: 3,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
}

const bottom: SxProps = {
    mt: 1,
    flex: 1
}

export default { box, field, button, header, bottom }