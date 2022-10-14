import { Card } from '@mui/material'
import Box from '@mui/material/Box'
import React, { useEffect, useState } from 'react'
import ImageIconButton from '../../atoms/buttons/ImageIconButton'
import ImageCardStyle from './ImageCardStyle'

type Props = {
    type: "API" | "Gallery"
    image: string
    title?: string
    size?: "small" | "medium" | "large"
}

const ImageCard = ({ type, image, title, size }: Props) => {

    const [imageUrl, setImageUrl] = useState(image)
    const [cardType, setCardType] = useState(type)
    const [displayButton, setDisplayButton] = useState({ display: "none" })

    useEffect(() => {
        setImageUrl(image)
    }, [])

    useEffect(() => {
        setCardType(type)
    }, [])

    let cardSize;
    switch (size) {
        case "small":
            cardSize = 80;
            break;
        case "medium":
            cardSize = 160;
            break;
        case "large":
            cardSize = 240;
            break;
        default:
            cardSize = 80;
    }
    return (
        <Card sx={{ height: cardSize, width: cardSize, backgroundImage: `url(${imageUrl})`, ...ImageCardStyle.card }}
            onMouseEnter={(e) => setDisplayButton({ display: "block" })}
            onMouseLeave={(e) => setDisplayButton({ display: "none" })}
        >
            {cardType === "Gallery" ? <Box sx={{ ...displayButton, }}>
                <ImageIconButton buttonType='delete' onClick={handleDeleteClick} size={size}></ImageIconButton>
            </Box> : <></>
            }
            <Box>

            </Box>
        </Card>
    )
}

const handleDeleteClick = () => {

}

export default ImageCard