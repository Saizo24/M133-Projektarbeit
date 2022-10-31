import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { AuthService } from '../../services/AuthService'

const UserGalleryPage = () => {
    const { username } = useParams()
    const [searchParams, setSearchParams] = useSearchParams()

    return (
        <Box>
            {username === AuthService().getUsernameFromStorage() ? (
                <Typography>Access granted</Typography>
            ) : (
                <Typography>ACCESS DENIED</Typography>
            )}
        </Box >
    )
}

export default UserGalleryPage