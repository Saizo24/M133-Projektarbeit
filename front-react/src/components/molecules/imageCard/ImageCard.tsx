import { Grid, Card, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import React, { useEffect, useState } from 'react'
import { GalleryType } from '../../../types/GalleryType'
import ImageIconButton from '../../atoms/buttons/ImageIconButton'
import ImageCardStyle from './ImageCardStyle'

type Props = {
    type: GalleryType
    image: string
    title?: string
    size?: "small" | "medium" | "large"
}

const ImageCard = ({ type, image, title, size }: Props) => {

    const [imageUrl, setImageUrl] = useState(image)
    const [cardType, setCardType] = useState(type)
    const [displayButton, setDisplayButton] = useState({ display: "none" })
    const [imageSize, setImageSize] = useState(size)

    useEffect(() => {
        setImageUrl(image)
    }, [])

    useEffect(() => {
        setCardType(type)
    }, [])

    let cardSize;
    let fontSize;
    switch (imageSize) {
        case "small":
            cardSize = 80;
            fontSize = "6px";
            break;
        case "medium":
            cardSize = 160;
            fontSize = "12px";
            break;
        case "large":
            cardSize = 240;
            fontSize = "16px";
            break;
        default:
            cardSize = 80;
    }
    return (
        <Card sx={{ height: cardSize, width: cardSize, backgroundImage: `url(${imageUrl})`, ...ImageCardStyle.card }}
            onMouseOver={(e) => setDisplayButton({ display: "flex" })}
            onMouseOut={(e) => {
                setDisplayButton({ display: "none" })
                //setImageSize(size)
            }}
            onClick={() => setImageSize("medium")}
        >
            {cardType === GalleryType.GALLERY && size !== "small" ?
                <Box sx={{ ...ImageCardStyle.gallery, ...displayButton }}>
                    <Box sx={ImageCardStyle.deleteButton}>
                        <ImageIconButton buttonType='delete' onClick={handleDeleteClick} size={size} ></ImageIconButton>
                    </Box>
                    {title ?
                        <Box sx={ImageCardStyle.header}>
                            <Typography fontSize={fontSize} textAlign="center"><h3>{title}</h3></Typography>
                        </Box> : <></>
                    }
                </Box> : <></>
            }
            {cardType === GalleryType.API && size !== "small" ? <Box sx={{ ...ImageCardStyle.api, ...displayButton }}>
                <ImageIconButton buttonType='add' onClick={handleDeleteClick} size={size}></ImageIconButton>
            </Box> : <></>
            }
        </Card>
    )
}

const handleDeleteClick = () => {

}

export default ImageCard