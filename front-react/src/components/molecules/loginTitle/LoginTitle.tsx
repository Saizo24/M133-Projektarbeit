import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import React from 'react'
import LoginTitleStyle from './LoginTitleStyle'

type Props = {}

const LoginTitle = (props: Props) => {
    return (
        <Box sx={LoginTitleStyle.box}>
            <Box>
                <img src={require("../../../images/logo.png")} alt="logo.png" style={{ height: "300px", width: "300px" }} />
            </Box>
            <Typography sx={LoginTitleStyle.title}>
                <h1>Welcome to MyMemes Gallery</h1>
            </Typography>
        </Box>

    )
}

export default LoginTitle