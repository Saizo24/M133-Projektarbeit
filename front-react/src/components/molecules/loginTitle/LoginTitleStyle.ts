import { SxProps } from "@mui/material";

const title: SxProps = {
    color: "white",
    textShadow:
        "1px  1px 1px black, 1px -1px 1px black, -1px  1px 1px black, -1px -1px 1px black",

}

const box: SxProps = {
    paddingTop: 2,
    paddingBotton: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
}

const img: React.CSSProperties = {
    height: "250px",
    width: "250px"
}

export default { title, box, img }