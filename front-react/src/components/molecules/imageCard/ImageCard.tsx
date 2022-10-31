import { Grid, Card, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import React, { MouseEventHandler, useEffect, useState } from 'react'
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
    const [sizeIndex, setSizeIndex] = useState(size ? sizes.findIndex((cardSize) => cardSize.name === size) : 0)
    const [isHovering, setIsHovering] = useState(false)

    useEffect(() => {
        setImageUrl(`${image.baseUrl}/id/${image.id}`)
    }, [image])

    useEffect(() => {
        setCardType(type)
    }, [])

    useEffect(() => {
        setSizeIndex(size ? sizes.findIndex((cardSize) => cardSize.name === size) : 0)
    }, [size])

    const openInNewTab = (url: string): void => {
        const newWindow = window.open(`${url}/1200`, '_blank', 'noopener,noreferrer')
        if (newWindow) {
            newWindow.opener = null
        }
    }

    return (
        <Card sx={{
            height: `${sizes[sizeIndex].cardSize}px`,
            width: `${sizes[sizeIndex].cardSize}px`,
            backgroundImage: `url(${imageUrl}/240)`,
            ...ImageCardStyle.card, borderWidth: isHovering ? "1px" : "0px"
        }}
            onMouseEnter={(e) => {
                setIsHovering(size && size !== "small" ? true : false)
            }
            }
            onMouseLeave={(e) => {
                setIsHovering(false)
            }}
            onClick={() => {
                if (size && size !== "small") {
                    openInNewTab(imageUrl)
                }
            }}

        >
            {cardType === GalleryType.GALLERY && size !== "small" ?
                <Box sx={{ ...ImageCardStyle.gallery, display: isHovering ? "flex" : "none" }}>
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
            {cardType === GalleryType.API && size !== "small" ? <Box sx={{ ...ImageCardStyle.api, display: isHovering ? "flex" : "none" }}>
                <ImageIconButton buttonType='add' onClick={handleDeleteClick} size={size}></ImageIconButton>
            </Box> : <></>
            }
        </Card>
    )
}

const handleDeleteClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
}

const handleAddClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
}

export default ImageCard