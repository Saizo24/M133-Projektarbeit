import { Grid, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import React, { useEffect, useState } from 'react'
import { GalleryType } from '../../../types/GalleryType'
import { ImageView } from '../../../types/ImageView.model'
import ImageCard from '../../molecules/imageCard/ImageCard'
import GalleryStyle from './GalleryStyle'


type Props = {
    type: GalleryType
    name: string
    apiImageList: ImageView[]
    size: "small" | "medium" | "large"
}

const Gallery = ({ type, name, apiImageList, size }: Props) => {
    const [imageList, setImageList] = useState<ImageView[]>([])
    useEffect(() => {
        setImageList(apiImageList)
    }, [apiImageList]);

    return (
        <Box sx={{ ...GalleryStyle.box }}>
            <Box>
                <Typography><h2>{name}</h2></Typography>
            </Box>
            <Grid container spacing={2} sx={{ flex: 1 }}>
                {imageList && imageList.length > 1 ? (imageList.map((image) => {
                    return (
                        <Grid item xs={6} sm={4} md={2.4} lg={2.4} sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                            <ImageCard type={type} image={image} size={size} />
                        </Grid>
                    )
                })) : (
                    <Grid item>
                        No images available
                    </Grid>
                )
                }
            </Grid>
        </Box >
    )
}

export default Gallery