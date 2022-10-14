import { SxProps } from "@mui/material"

const card: SxProps = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "stretch"
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
    backgroundColor: "rgba(255, 255, 255, 0.7)"
}

const deleteButton: SxProps = {
    padding: 1
}

const api: SxProps = {
    flex: 1,
    display: "flex",
    flexDirection: "row-reverse",
    alignItems: "flex-end",
    padding: 1
}

export default { card, gallery, api, header, deleteButton }