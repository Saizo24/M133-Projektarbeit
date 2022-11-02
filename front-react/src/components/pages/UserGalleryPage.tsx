import { SelectChangeEvent, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { AuthService } from '../../services/AuthService'
import { GalleryType } from '../../types/GalleryType'
import { ImageView } from '../../types/ImageView.model'
import PaginationBox from '../molecules/paginationBox/PaginationBox'
import Gallery from '../organisms/gallery/Gallery'
import PageStyle from './PageStyle'
import MyNavBar from '../organisms/navbar/MyNavbar'
import BottomBar from '../organisms/bottombar/BottomBar'
import { UserService } from '../../services/UserService'

const UserGalleryPage = () => {
    const username = AuthService().getUsernameFromStorage()
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()
    const [gallery, setGallery] = useState<{ galleryName: string, pictures: ImageView[] }>({ galleryName: "", pictures: [] })
    const [maxEntries, setMaxEntries] = useState(0)

    const [pageNumber, setPageNumber] = useState(searchParams.get("page") ? Number(searchParams.get("page")) : 1)
    const [pageLimit, setPageLimit] = useState(searchParams.get("limit") ? Number(searchParams.get("limit")) : 30)

    useEffect(() => {
        setPageNumber(searchParams.get("page") ? Number(searchParams.get("page")) : 1)
        setPageLimit(searchParams.get("limit") ? Number(searchParams.get("limit")) : 30)
    }, [searchParams])

    useEffect(() => {
        if (!username) {
            navigate("/login")
        } else {
            UserService().getAllPicturesFromUser().then((data) => {
                console.log(data)
                const { pictures } = data
                setMaxEntries(pictures.length)
                setGallery({ galleryName: "", pictures })
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
        <Box >
            {username && username.toLowerCase() === AuthService().getUsernameFromStorage()?.toLowerCase() ? (
                <Box sx={{ ...PageStyle.defaultPageStyle }}>
                    <Box sx={{ width: "100%" }}>
                        <MyNavBar />
                    </Box>
                    <Box sx={{ ...PageStyle.galleryStyle }}>
                        <h1>Show your Gallery</h1>
                        <Typography>
                            Enjoy your Gallery
                        </Typography>
                        <Box sx={{ width: "100%" }}>
                            <Gallery type={GalleryType.GALLERY} apiImageList={gallery.pictures.slice((pageNumber - 1) * pageLimit + 1, pageNumber * pageLimit + 1)} name={gallery.galleryName} size={"medium"} />
                        </Box>
                        <Box>
                            <PaginationBox maxEntries={maxEntries} pageLimit={pageLimit} pageNumber={pageNumber} handleChangePage={handleChangePage} handleChangePageLimit={handleChangePageLimit} />
                        </Box>
                    </Box>
                    <BottomBar />
                </Box>
            ) : (
                <Typography>ACCESS DENIED</Typography>
            )}
        </Box >
    )
}

export default UserGalleryPage