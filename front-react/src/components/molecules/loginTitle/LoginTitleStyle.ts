import { SxProps } from "@mui/material";
import { CSSProperties } from "@mui/styled-engine";

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

const img: CSSProperties = {
    height: "200px",
    width: "200px"
}

export default { title, box, img }