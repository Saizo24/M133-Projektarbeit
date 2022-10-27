import Box from '@mui/material/Box'
import React, { useEffect, useState } from 'react'
import ImageServices from '../../services/ImageServices'
import { GalleryType } from '../../types/GalleryType'
import { ImageService } from '../../types/ImageService.model'
import { ImageView } from '../../types/ImageView.model'
import Gallery from '../organisms/gallery/Gallery'

const BrowseGalleriesPage = () => {
    const [galleries, setGalleries] = useState<{ galleryName: string, imageGallery: ImageView[] }[]>([])
    useEffect(() => {
        ImageServices.forEach((imageService: ImageService) => {
            imageService().getPreviewListOfImages().then((data) => {
                console.log(data)
                const gallery: ImageView[] = []
                const fetchedData: { id: string, download_url: string }[] = data;
                fetchedData.forEach((entry) => {
                    const id = entry.id
                    gallery.push({ id, baseUrl: imageService().getBaseUrl() })
                })
                const newGalleries = Array.from(galleries)

                newGalleries.push({ galleryName: imageService().getServiceName(), imageGallery: gallery })
                setGalleries(newGalleries)
            })
        })
    }, [])
    return (
        <Box>
            <Box>
                Navbar
            </Box>
            <Box>
                {galleries.map((gallery, index) => {
                    return (
                        <Gallery key={index} type={GalleryType.API} apiImageList={gallery.imageGallery} name={gallery.galleryName} />
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