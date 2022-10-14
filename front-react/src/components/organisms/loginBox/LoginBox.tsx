import { Button, Grid, TextField } from '@mui/material'
import Box from "@mui/material/Box"
import LoginBoxStyle from './LoginBoxStyle'
import React from 'react'

type Props = {}

const LoginBox = (props: Props) => {
    return (
        <Box sx={LoginBoxStyle.loginBoxStyle}>
            <Grid item sx={LoginBoxStyle.loginFieldStyle}>
                <TextField label="Username" >

                </TextField>
                <TextField label="Password" type="password"></TextField>
            </Grid>
            <Grid item sx={LoginBoxStyle.loginButtonStyle}>
                <Button variant='contained' type='submit'>Login</Button>
            </Grid>
            <Grid item>
                No Account yet? Create Account here!
            </Grid>
        </Box >
    )
}

export default LoginBox