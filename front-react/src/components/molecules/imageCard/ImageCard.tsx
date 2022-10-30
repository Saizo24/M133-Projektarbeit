import { Grid, Card, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import React, { useEffect, useState } from 'react'
import { GalleryType } from '../../../types/GalleryType'
import { ImageView } from '../../../types/ImageView.model'
import ImageIconButton from '../../atoms/buttons/ImageIconButton'
import ImageCardStyle from './ImageCardStyle'

type Props = {
    type: GalleryType
    image: ImageView
    title?: string
    size?: "small" | "medium" | "large"
}

const sizes = [
    { name: "small", cardSize: 80, fontSize: "6px" },
    { name: "medium", cardSize: 160, fontSize: "12px" },
    { name: "large", cardSize: 240, fontSize: "16px" }
]

const ImageCard = ({ type, image, title, size }: Props) => {

    const [imageUrl, setImageUrl] = useState(image.url)
    const [cardType, setCardType] = useState(type)
    const [displayButton, setDisplayButton] = useState({ display: "none" })
    const [sizeIndex, setSizeIndex] = useState(size ? sizes.findIndex((cardSize) => cardSize.name === size) : 0)

    useEffect(() => {
        setImageUrl(image.url)
    }, [image])

    useEffect(() => {
        setCardType(type)
    }, [])

    return (
        <Card sx={{ height: `${sizes[sizeIndex].cardSize}px`, width: `${sizes[sizeIndex].cardSize}px`, ...ImageCardStyle.card }}
            onMouseOver={(e) => {
                setDisplayButton({ display: "flex" })
                setSizeIndex(size ? sizes.findIndex((cardSize) => cardSize.name === size) + 1 : 1)
            }
            }
            onMouseOut={(e) => {
                setDisplayButton({ display: "none" })
                setSizeIndex(size ? sizes.findIndex((cardSize) => cardSize.name === size) : 0)
            }}
        >
            <Box sx={{ position: "absolute", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <img src={imageUrl} alt="" loading='lazy' style={{ height: `${sizes[sizeIndex].cardSize}px`, width: `${sizes[sizeIndex].cardSize}px`, objectFit: "cover", objectPosition: "" }} />
            </Box>
            {cardType === GalleryType.GALLERY && size !== "small" ?
                <Box sx={{ ...ImageCardStyle.gallery, ...displayButton }}>
                    <Box sx={ImageCardStyle.deleteButton}>
                        <ImageIconButton buttonType='delete' onClick={handleDeleteClick} size={size} ></ImageIconButton>
                    </Box>
                    {title ?
                        <Box sx={ImageCardStyle.header}>
                            <Typography fontSize={sizes[sizeIndex]} textAlign="center"><h3>{title}</h3></Typography>
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