import { IconButton, SxProps } from '@mui/material'
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
            icon = <AddBoxIcon fontSize={size} color='success' />;
            break;
        case "delete":
            icon = <RemoveCircleIcon fontSize={size} color='error' />;
            break;
        default:
            icon = <AddBoxIcon fontSize={size} color='success' />;
            break;
    }
    return (
        <IconButton size={size} onClick={onClick} sx={sx}>
            {icon}
        </IconButton>
    )
}

export default ImageIconButton