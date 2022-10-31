import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { ImageView } from '../../types/ImageView.model'
import ImageServices from '../../services/ImageServices'
import Box from '@mui/material/Box'
import { GalleryType } from '../../types/GalleryType'
import Gallery from '../../components/organisms/gallery/Gallery'

type Props = {}

const GalleryPage = ({ }: Props) => {
    const { id } = useParams()
    const [searchParams, setSearchParams] = useSearchParams()
    const [galleries, setGalleries] = useState<{ galleryName: string, imageGallery: ImageView[] }[]>([])

    const [pageNumber, setPageNumber] = useState(searchParams.get("page") ? Number(searchParams.get("page")) : 1)
    const [pageLimit, setPageLimit] = useState(searchParams.get("limit") ? Number(searchParams.get("limit")) : 30)

    useEffect(() => {
        setPageNumber(searchParams.get("page") ? Number(searchParams.get("page")) : 1)
        setPageLimit(searchParams.get("limit") ? Number(searchParams.get("limit")) : 30)
    }, [searchParams])

    useEffect(() => {
        if (id) {
            ImageServices[Number(id)]().getListOfImages(pageNumber, pageLimit).then((data) => {
                const gallery: ImageView[] = []
                const fetchedData: { id: string, download_url: string }[] = data;
                fetchedData.forEach((entry) => {
                    gallery.push({ id: entry.id, baseUrl: ImageServices[Number(id)]().getBaseUrl() })
                })
                const newGalleries = []
                newGalleries.push({ galleryName: ImageServices[Number(id)]().getServiceName(), imageGallery: gallery })
                setGalleries(newGalleries)
            })
        }
    }, [])

    return (
        <div>
            <h1>Show Gallery</h1>
            <Box>
                {galleries.map((gallery, index) => {
                    return (
                        <Gallery key={index} type={GalleryType.API} apiImageList={gallery.imageGallery} name={gallery.galleryName} size={"medium"} />
                    )
                })}
            </Box>
        </div>
    )
}

export default GalleryPage