import { IconButton, SxProps } from '@mui/material'
import Box from '@mui/material/Box'
import AddBoxIcon from "@mui/icons-material/AddBox"
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import React from 'react'

type Props = {
    buttonType: "add" | "delete"
    size?: "small" | "medium" | "large"
    onClick: React.MouseEventHandler<HTMLButtonElement>
    sx?: SxProps
}

const ImageIconButton = ({ buttonType, size, onClick, sx }: Props) => {
    let icon;
    switch (buttonType) {
        case "add":
            icon = <AddBoxIcon fontSize={size} color='success' sx={{ backgroundColor: "white", borderRadius: 1 }} />;
            break;
        case "delete":
            icon = <RemoveCircleIcon fontSize={size} color='error' sx={{ backgroundColor: "white", borderRadius: 100 }} />;
            break;
        default:
            icon = <AddBoxIcon fontSize={size} color='success' sx={{ backgroundColor: "white", borderRadius: 1 }} />;
            break;
    }
    return (
        <IconButton size={size} onClick={onClick} sx={{ ...sx, padding: 0 }}>
            {icon}
        </IconButton>
    )
}

export default ImageIconButton