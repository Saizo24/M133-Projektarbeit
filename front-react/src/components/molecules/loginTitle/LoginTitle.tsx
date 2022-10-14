import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import React from 'react'
import LoginTitleStyle from './LoginTitleStyle'

type Props = {}

const LoginTitle = (props: Props) => {
    return (
        <Box sx={LoginTitleStyle.box}>
            <Typography sx={LoginTitleStyle.title}>
                <h1>Welcome to MyAPIGallery</h1>
            </Typography>
        </Box>

    )
}

export default LoginTitle