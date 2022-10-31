import React, { useEffect, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { ImageView } from '../../types/ImageView.model'
import ImageServices from '../../services/ImageServices'
import Box from '@mui/material/Box'
import { GalleryType } from '../../types/GalleryType'
import Gallery from '../organisms/gallery/Gallery'
import PageStyle from './PageStyle'
import { Pagination, Typography } from '@mui/material'
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import PaginationBox from '../molecules/paginationBox/PaginationBox'

type Props = {}

const MAX_ENTRIES = 1000

const GalleryPage = ({ }: Props) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const [gallery, setGallery] = useState<{ galleryName: string, imageGallery: ImageView[] }>({ galleryName: "", imageGallery: [] })
    const [maxEntries, setMaxEntries] = useState(Number(MAX_ENTRIES))

    const [pageNumber, setPageNumber] = useState(searchParams.get("page") ? Number(searchParams.get("page")) : 1)
    const [pageLimit, setPageLimit] = useState(searchParams.get("limit") ? Number(searchParams.get("limit")) : 30)

    useEffect(() => {
        setPageNumber(searchParams.get("page") ? Number(searchParams.get("page")) : 1)
        setPageLimit(searchParams.get("limit") ? Number(searchParams.get("limit")) : 30)
    }, [searchParams])

    useEffect(() => {
        if (id) {
            ImageServices[Number(id)]().getListOfImages(pageNumber, pageLimit).then((data) => {
                const newGallery: { galleryName: string, imageGallery: ImageView[] } = { galleryName: ImageServices[Number(id)]().getServiceName(), imageGallery: [] }
                const fetchedData: { id: string, download_url: string }[] = data;
                fetchedData.forEach((entry) => {
                    newGallery.imageGallery.push({ id: entry.id, baseUrl: ImageServices[Number(id)]().getBaseUrl() })
                })
                setGallery(newGallery)
            })
        }
    }, [pageNumber, pageLimit])

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        navigate(`${window.location.pathname}?page=${value}&limit=${pageLimit}`)
    };

    const handleChangePageLimit = (
        event: SelectChangeEvent
    ) => {
        navigate(`${window.location.pathname}?page=1&limit=${parseInt(event.target.value)}`)
    };

    return (
        <Box sx={{ ...PageStyle.defaultPageStyle }}>
            <Box>Navbar</Box>
            <Box sx={{ ...PageStyle.galleryStyle }}>
                <h1>Show Gallery</h1>
                <Typography>
                    Click on the Add-Button to add pictures to your gallery
                </Typography>
                <Box >
                    <Gallery key={id} type={GalleryType.API} apiImageList={gallery.imageGallery} name={gallery.galleryName} size={"medium"} />
                </Box>
                <Box>
                    <PaginationBox maxEntries={maxEntries} pageLimit={pageLimit} pageNumber={pageNumber} handleChangePage={handleChangePage} handleChangePageLimit={handleChangePageLimit} />
                </Box>
            </Box>
            <Box>BottomBar</Box>
        </Box>

    )
}

export default GalleryPage