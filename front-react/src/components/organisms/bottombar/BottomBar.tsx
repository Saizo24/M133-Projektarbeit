import React from 'react'
import Container from '@mui/material/Container';
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'

type Props = {}

const BottomBar = (props: Props) => {
    return (
        <Box sx={{ width: "100%", backgroundColor: "white", height: "80px" }}>
            <Container maxWidth="xl">
                <Typography>{"By Ngoc-Phuc Nguyen & Gian-Luca Kunfermann"}</Typography>
            </Container>
        </Box>

    )
}

export default BottomBar