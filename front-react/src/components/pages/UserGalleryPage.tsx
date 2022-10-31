import { SelectChangeEvent, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { AuthService } from '../../services/AuthService'
import { GalleryType } from '../../types/GalleryType'
import { ImageView } from '../../types/ImageView.model'
import PaginationBox from '../molecules/paginationBox/PaginationBox'
import Gallery from '../organisms/gallery/Gallery'
import PageStyle from './PageStyle'

const MAX_ENTRIES = 1000

const UserGalleryPage = () => {
    const { username } = useParams()
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

    const handleChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        navigate(`${window.location.pathname}?page=${value}&limit=${pageLimit}`)
    };

    const handleChangePageLimit = (
        event: SelectChangeEvent
    ) => {
        navigate(`${window.location.pathname}?page=1&limit=${parseInt(event.target.value)}`)
    };

    return (
        <Box >
            {username && username.toLowerCase() === AuthService().getUsernameFromStorage()?.toLowerCase() ? (
                <Box sx={{ ...PageStyle.defaultPageStyle }}>
                    <Box>Navbar</Box>
                    <Box sx={{ ...PageStyle.galleryStyle }}>
                        <h1>Show your Gallery</h1>
                        <Typography>
                            Enjoy your Gallery
                        </Typography>
                        <Box >
                            <Gallery type={GalleryType.API} apiImageList={gallery.imageGallery} name={gallery.galleryName} size={"medium"} />
                        </Box>
                        <Box>
                            <PaginationBox maxEntries={maxEntries} pageLimit={pageLimit} pageNumber={pageNumber} handleChangePage={handleChangePage} handleChangePageLimit={handleChangePageLimit} />
                        </Box>
                    </Box>
                    <Box>BottomBar</Box>
                </Box>
            ) : (
                <Typography>ACCESS DENIED</Typography>
            )}
        </Box >
    )
}

export default UserGalleryPage