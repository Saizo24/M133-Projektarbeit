import { Grid, TextField } from '@mui/material'
import React from 'react'

type Props = {}

const LoginPage = (props: Props) => {
    return (
        <Grid container sm={4} direction="column" spacing={2}>
            <h1>
                Login to MyAPIGallery
            </h1>
            <Grid item>
                <TextField label="Username" focused>

                </TextField>
            </Grid>
            <Grid item>
                <TextField label="Password" type="password">

                </TextField>
            </Grid>
        </Grid>
    )
}

export default LoginPage