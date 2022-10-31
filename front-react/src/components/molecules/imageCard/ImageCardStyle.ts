import { SxProps } from "@mui/material"
import zIndex from "@mui/material/styles/zIndex"
import { relative } from "path"

const card: SxProps = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    position: "relative",
    flexDirection: "column",
    justifyContent: "stretch",
    border: "0px black solid",
}

const gallery: SxProps = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
    gap: "10px"
}

const header: SxProps = {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    zIndex: 10
}

const deleteButton: SxProps = {
    padding: 1,
    zIndex: 10

}

const api: SxProps = {
    flex: 1,
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "flex-end",
    padding: 1
}

export default { card, gallery, api, header, deleteButton }