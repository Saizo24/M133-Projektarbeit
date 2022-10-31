import { Grid, TextField, Typography } from '@mui/material'
import Box from "@mui/material/Box"
import LoginButton from '../../atoms/buttons/LoginButton'
import LoginBoxStyle from './LoginBoxStyle'


type Props = {}

const LoginBox = (props: Props) => {
    return (
        <Box sx={LoginBoxStyle.box}>
            <Grid item sx={LoginBoxStyle.header}>
                <Typography>
                    <h2>Login</h2>
                </Typography>
            </Grid>
            <Grid item sx={LoginBoxStyle.field}>
                <TextField label="Username" ></TextField>
                <TextField label="Password" type="password"></TextField>
                <LoginButton text='Login'></LoginButton>
            </Grid>
            <Grid item sx={LoginBoxStyle.bottom}>
                <Typography>
                    <p>No Account yet? <a href="">Sign up here!</a></p>
                </Typography>

            </Grid>
        </Box >
    )
}

export default LoginBox