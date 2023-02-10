import {
    AppBar,
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton, ListItemIcon, ListItemText,
    Toolbar,
    Hidden, Link, createTheme, ThemeProvider
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom"
import logo from "../../assets/logo.png"
import { House } from "@mui/icons-material";
import { Logo, LogoContainer, Span, Title } from "./navbarStyle";
import { useSelector } from "react-redux";

const Navbar = () => {
    const name = useSelector(state => state.user.username);
    const [toggleDrawer, setToggleDrawer] = useState(false);

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#0D0D0B',
            },
        },
    });

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <House />
                        </ListItemIcon>
                        <Link
                            component={RouterLink}
                            to="/"
                            sx={{ color: "grey", textDecoration: "none" }}
                        >
                            <ListItemText primary="Home" />
                        </Link>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
    return (
        <ThemeProvider theme={darkTheme}>
            <Box sx={{ flexGrow: 1 }}>

                <AppBar position="static">
                    <Toolbar>
                        <Hidden only={['lg', 'xl']}>
                            <IconButton
                                onClick={() => setToggleDrawer(true)}
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon/>
                            </IconButton>
                        </Hidden>
                        <Link component={RouterLink} to="/" sx={{ flexGrow: 1 }}>
                            <LogoContainer>
                                <Logo src={logo} alt="logo"/>
                                <Title>
                                    Wink<Span>Posts</Span>
                                </Title>
                            </LogoContainer>
                        </Link>
                        <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
                            <ListItemButton
                                component={RouterLink}
                                to="settings"
                                sx={{ color: 'white' }}
                            >
                                {name}
                            </ListItemButton>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Drawer
                    anchor="left"
                    open={toggleDrawer}
                    onClose={() => setToggleDrawer(false)}
                >
                    {list()}
                </Drawer>
            </Box>
        </ThemeProvider>
    );
};

export default Navbar;