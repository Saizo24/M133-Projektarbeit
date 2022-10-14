import { Button, Grid, TextField } from '@mui/material'
import Box from "@mui/material/Box"
import React from 'react'
import LoginTitle from '../molecules/loginTitle/LoginTitle'
import LoginBox from '../organisms/loginBox/LoginBox'
import PageStyle from './PageStyle'

type Props = {}

const LoginPage = (props: Props) => {
    return (
        <Box sx={PageStyle.loginPageStyle} >
            <LoginTitle></LoginTitle>
            <LoginBox></LoginBox>
        </Box>
    )
}

export default LoginPage