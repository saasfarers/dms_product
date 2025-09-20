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
  Settings,
  BarChart,
  Chat,
  EmojiEvents,
  Logout,
  Language,
} from "@mui/icons-material";
import { DashboardData } from './Dashboard.data';
import { sampleDashboardfunction } from './Dashboard.helper';
import { fetchDashboardData, changeLanguage, logout } from './Dashboard.api';
import useStyles from './Dashboard.style';
import AppContext from '../../contextState/AppContext';

function Dashboard() {
    const classes = useStyles();
    const navigate = useNavigate();
    const { language, setLanguage, setSnackbar } = useContext(AppContext);

    const handleLanguage = async (newLanguage) => {
        try {
            const dataLogin = await changeLanguage(newLanguage);
            if (dataLogin?.status == true) {
                setLanguage(newLanguage);
                setSnackbar((prev) => ({
                    ...prev,
                    open : true,
                    message : "Language Changed Successfully.",
                    severity : "success"
                }));
            }else{
                setSnackbar((prev) => ({
                    ...prev,
                    open : true,
                    message : dataLogin?.message,
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
            const dataLogin = await logout();
            if (dataLogin?.status == true) {
                setSnackbar((prev) => ({
                    ...prev,
                    open : true,
                    message : dataLogin?.message,
                    severity : "success"
                }));
                navigate('/login')
            }else{
                setSnackbar((prev) => ({
                    ...prev,
                    open : true,
                    message : dataLogin?.message,
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
                            {DashboardData[language].hub}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {DashboardData[language].system}
                        </Typography>
                    </Box>
                    </Box>

                    <Box className={classes.adminBox}>
                    <Typography fontWeight="500" color="success.dark">
                        {DashboardData[language].admin}
                    </Typography>
                    </Box>
                </Box>

                <List sx={{ flex: 1, p: 2 }}>
                    <ListItem disablePadding>
                        <ListItemButton selected>
                            <ListItemIcon>
                                <Home color="success" />
                            </ListItemIcon>
                            <ListItemText primary={DashboardData[language].Dashboard} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <EmojiEvents />
                            </ListItemIcon>
                            <ListItemText primary={DashboardData[language].Platform_Management} />
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
                        {DashboardData[language].Logout}
                    </Button>
                </Box>
            </Drawer>
        </>
    );
}

export default Dashboard;