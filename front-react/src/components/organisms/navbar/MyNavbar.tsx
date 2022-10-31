import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Logo from '../../../images/logo.png';
import { useNavigate } from 'react-router-dom';
import { AuthService, isLoggedIn } from '../../../services/AuthService';

const pages = ["Browse Galleries", "My Gallery"]
const settings = ['My Gallery', 'Logout'];


const MyNavbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const navigate = useNavigate()

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="fixed" sx={{ width: "100vw", display: "block" }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{
                        height: "70px",
                        width: "70px",
                        border: "1px solid white",
                        borderRadius: "100px",
                        backgroundImage: `url(${Logo})`,
                        backgroundSize: "70px",
                        display: { xs: 'none', md: 'block' }
                    }}
                        onClick={() => navigate("/")}>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem key={pages[0]} onClick={() => {
                                handleCloseNavMenu()
                                navigate("/")
                            }}>
                                <Typography textAlign="center">{pages[0]}</Typography>
                            </MenuItem><MenuItem key={pages[1]} onClick={() => {
                                handleCloseNavMenu()
                                navigate(`/users/${AuthService().getUsernameFromStorage()?.toString().toLowerCase()}`)
                            }}>
                                <Typography textAlign="center">{pages[1]}</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Box sx={{
                        flexGrow: 1,
                        height: "70px",
                        width: "70px",
                        backgroundImage: `url(${Logo})`,
                        backgroundSize: "70px",
                        backgroundRepeat: "no-repeat",
                        display: { xs: 'block', md: 'none' }
                    }}
                        onClick={() => navigate("/")}>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button
                            key={pages[0]}
                            onClick={() => {
                                navigate("/")
                            }}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {pages[0]}
                        </Button>
                        <Button
                            key={pages[1]}
                            onClick={() => {
                                navigate(`/users/${AuthService().getUsernameFromStorage()?.toString().toLowerCase()}`)
                            }}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {pages[1]}
                        </Button>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open Profile">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt="Profile" />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {isLoggedIn() ? (<>
                                <MenuItem key={settings[0]} onClick={() => {
                                    navigate(`/users/${AuthService().getUsernameFromStorage()?.toString().toLowerCase()}`)
                                    handleCloseUserMenu()
                                }}>
                                    <Typography textAlign="center">{settings[0]}</Typography>
                                </MenuItem>
                                <MenuItem key={settings[1]} onClick={() => {
                                    AuthService().logout()
                                    handleCloseUserMenu()
                                    navigate("/login")
                                }}>
                                    <Typography textAlign="center">{settings[1]}</Typography>
                                </MenuItem>
                            </>
                            ) : (<>
                                <MenuItem key={"Login"} onClick={() => {
                                    navigate("/login")
                                    handleCloseUserMenu()
                                }}>
                                    <Typography textAlign="center">{"Login"}</Typography>
                                </MenuItem>
                            </>)}

                        </Menu>


                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}


export default MyNavbar