import Box from '@mui/material/Box'
import React, { useEffect, useState } from 'react'
import ImageServices from '../../services/ImageServices'
import { GalleryType } from '../../types/GalleryType'
import { ImageService } from '../../types/ImageService.model'
import { ImageView } from '../../types/ImageView.model'
import Gallery from '../organisms/gallery/Gallery'

const BrowseGalleriesPage = () => {
    const [galleries, setGalleries] = useState<ImageView[][]>([])
    const [galleryNames, setGalleryNames] = useState<string[]>([])
    useEffect(() => {

        ImageServices.forEach((imageService: { name: string, service: ImageService }) => {
            imageService.service().getPreviewListOfImages().then((data) => {
                const fetchedData: { id: string, download_url: string }[] = data;
                const gallery: ImageView[] = []
                fetchedData.forEach((entry) => {
                    const id = entry.id
                    const url = entry.download_url
                    gallery.push({ id, url })
                    console.log(gallery)
                })
                const newGalleries = Array.from(galleries)
                newGalleries.push(gallery)
                setGalleries(newGalleries)
            })
            const newGalleryNames = Array.from(galleryNames)
            newGalleryNames.push(imageService.name)
            setGalleryNames(newGalleryNames)
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
                        <Gallery key={index} type={GalleryType.API} apiImageList={gallery} name={galleryNames[index]} />
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