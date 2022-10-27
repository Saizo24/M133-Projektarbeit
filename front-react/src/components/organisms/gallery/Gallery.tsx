import { Grid, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import React, { useEffect, useState } from 'react'
import { GalleryType } from '../../../types/GalleryType'
import { ImageView } from '../../../types/ImageView.model'
import ImageCard from '../../molecules/imageCard/ImageCard'

type Props = {
    type: GalleryType
    name: string
    apiImageList: ImageView[]
}

const Gallery = ({ type, name, apiImageList }: Props) => {
    const [imageList, setImageList] = useState<ImageView[]>([])
    useEffect(() => {
        setImageList(apiImageList)
    }, []);

    return (
        <Box>
            <Box>
                <Typography>{name}</Typography>
            </Box>
            <Grid container>
                {imageList && imageList.length > 1 ? (imageList.map((image) => {
                    return (
                        <Grid item>
                            <ImageCard type={type} image={image} size="small" />
                        </Grid>
                    )
                })) : (
                    <Grid>
                        No images available
                    </Grid>
                )
                }
            </Grid>
        </Box>
    )
}

export default Gallery