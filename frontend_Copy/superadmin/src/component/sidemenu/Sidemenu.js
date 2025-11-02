import React, { useContext } from "react";
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Drawer,
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  MenuItem,
  Select,
} from "@mui/material";
import {
  Home,
  EmojiEvents,
  Logout,
  Language,
} from "@mui/icons-material";
import { SidemenuData } from './Sidemenu.data';
import { } from './Sidemenu.helper';
import { changeLanguage, logout } from './Sidemenu.api';
import useStyles from './Sidemenu.style';
import AppContext from '../../contextState/AppContext';

function Sidemenu() {
    const classes = useStyles();
    const navigate = useNavigate();
    const { language, setLanguage, setSnackbar } = useContext(AppContext);

    const handleLanguage = async (newLanguage) => {
        try {
            const datalanguage = await changeLanguage(newLanguage);
            if (datalanguage?.status === true) {
                setLanguage(newLanguage);
                setSnackbar((prev) => ({
                    ...prev,
                    open : true,
                    message : datalanguage?.message,
                    severity : "success"
                }));
            }else{
                setSnackbar((prev) => ({
                    ...prev,
                    open : true,
                    message : datalanguage?.message,
                    severity : "error"
                }));
            }
        } catch (error) {
            setSnackbar((prev) => ({
                ...prev,
                open : true,
                message : error,
                severity : "error"
            }));
        }
    }
    const handleLogout = async () => {
        try {
            const dataLogout = await logout();
            if (dataLogout?.status === true) {
                setSnackbar((prev) => ({
                    ...prev,
                    open : true,
                    message : dataLogout?.message,
                    severity : "success"
                }));
                setLanguage('en');
                navigate('/login')
            }else{
                setSnackbar((prev) => ({
                    ...prev,
                    open : true,
                    message : dataLogout?.message,
                    severity : "error"
                }));
            }
        } catch (error) {
            setSnackbar((prev) => ({
                ...prev,
                open : true,
                message : error,
                severity : "error"
            }));
        }
    }

    return (
        <>
            <Drawer variant="permanent" className={classes.drawer}>
                <Box className={classes.header}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                    <Box className={classes.logoBox}>🕌</Box>
                    <Box>
                        <Typography variant="h6" fontWeight="bold">
                            {SidemenuData[language].hub}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {SidemenuData[language].system}
                        </Typography>
                    </Box>
                    </Box>

                    <Box className={classes.adminBox}>
                    <Typography fontWeight="500" color="success.dark">
                        {SidemenuData[language].admin}
                    </Typography>
                    </Box>
                </Box>

                <List sx={{ flex: 1, p: 2 }}>
                    <ListItem disablePadding>
                        <ListItemButton component={RouterLink} to="/dashboard" selected={window.location.pathname === "/dashboard"}>
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary={SidemenuData[language].Dashboard} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={RouterLink} to="/platform-management" selected={window.location.pathname === "/platform-management"}>
                            <ListItemIcon>
                                <EmojiEvents />
                            </ListItemIcon>
                            <ListItemText primary={SidemenuData[language].Platform_Management} />
                        </ListItemButton>
                    </ListItem>
                </List>

                <Divider />

                <Box sx={{ p: 2 }}>
                    <Box className={classes.languageBox}>
                    <Language color="success" fontSize="small" />
                    <Select
                        variant="standard"
                        disableUnderline
                        value={language}
                        onChange={(e) => handleLanguage(e.target.value)}
                        sx={{ ml: 1, fontSize: "14px", flex: 1 }}
                    >
                        <MenuItem value="en">English</MenuItem>
                        <MenuItem value="ta">தமிழ்</MenuItem>
                    </Select>
                    </Box>

                    <Button
                        fullWidth
                        startIcon={<Logout />}
                        color="error"
                        className={classes.logoutBtn}
                        onClick={(e) => handleLogout()}
                    >
                        {SidemenuData[language].Logout}
                    </Button>
                </Box>
            </Drawer>
        </>
    );
}

export default Sidemenu;