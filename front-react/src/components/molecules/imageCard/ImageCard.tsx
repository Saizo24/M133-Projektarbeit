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

    const [imageUrl, setImageUrl] = useState(`${image.baseUrl}/id/${image.id}`)
    const [cardType, setCardType] = useState(type)
    const [displayButton, setDisplayButton] = useState({ display: "none" })
    const [cardBorderWidth, setCardBorderWidth] = useState("0px")
    const [sizeIndex, setSizeIndex] = useState(size ? sizes.findIndex((cardSize) => cardSize.name === size) : 0)

    useEffect(() => {
        setImageUrl(`${image.baseUrl}/id/${image.id}`)
    }, [image])

    useEffect(() => {
        setCardType(type)
    }, [])

    useEffect(() => {
        setSizeIndex(size ? sizes.findIndex((cardSize) => cardSize.name === size) : 0)
    }, [size])

    return (
        <Card sx={{
            height: `${sizes[sizeIndex].cardSize}px`,
            width: `${sizes[sizeIndex].cardSize}px`,
            backgroundImage: `url(${imageUrl}/240/240)`,
            ...ImageCardStyle.card, borderWidth: cardBorderWidth
        }}
            onMouseEnter={(e) => {
                if (size && size !== "small") {
                    setDisplayButton({ display: "flex" })
                    setCardBorderWidth("2px")
                }
            }
            }
            onMouseLeave={(e) => {
                if (size && size !== "small") {
                    setDisplayButton({ display: "none" })
                    setCardBorderWidth("0px")
                }
            }}
        >
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