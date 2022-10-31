import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import React, { useEffect, useState } from 'react'
import ImageServices from '../../services/ImageServices'
import { GalleryType } from '../../types/GalleryType'
import { ImageService } from '../../types/ImageService.model'
import { ImageView } from '../../types/ImageView.model'
import Gallery from '../organisms/gallery/Gallery'
import PageStyle from './PageStyle'
import "./Gallery.css"

const BrowseGalleriesPage = () => {
    const [galleries, setGalleries] = useState<{ galleryName: string, imageGallery: ImageView[] }[]>([])
    useEffect(() => {
        ImageServices.forEach((imageService: ImageService) => {
            imageService().getPreviewListOfImages().then((data) => {
                const gallery: ImageView[] = []
                const fetchedData: { id: string, download_url: string }[] = data;
                fetchedData.forEach((entry) => {
                    const id = entry.id
                    gallery.push({ id, baseUrl: imageService().getBaseUrl() })
                })
                const newGalleries = []
                newGalleries.push({ galleryName: imageService().getServiceName(), imageGallery: gallery })
                setGalleries(newGalleries)
            })
        })
    }, [])
    return (
        <Box sx={{ ...PageStyle.defaultPageStyle, ...PageStyle.browserPageStyle }}>
            <Box>
                Navbar
            </Box>
            <Box>
                <Typography>
                    Browse Galleries - Previews
                </Typography>
                <Typography>
                    Choose a gallery to add Pictures to your own gallery
                </Typography>
            </Box>
            <Box>
                {galleries.map((gallery, index) => {
                    return (
                        <Box className='galleryBox'>
                            <Gallery key={index} type={GalleryType.API} apiImageList={gallery.imageGallery} name={gallery.galleryName} size={"small"} />
                        </Box>
                    )
                })}
            </Box>
            <Box>
                BottomBar
            </Box>
        </Box>

    )
}

export default BrowseGalleriesPage