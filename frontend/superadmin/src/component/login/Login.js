import React, { useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
} from "@mui/material";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { LoginData } from './Login.data';
import { sampleLoginfunction } from './Login.helper';
import { fetchLoginData } from './Login.api';
import useStyles from './Login.style';
import AppContext from '../../contextState/AppContext';

function Login() {
    const classes = useStyles();
    const { language } = useContext(AppContext);

    return (
        <>
            <Box
                sx={{
                    bgcolor: "#edffeaff",
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {/* Column layout */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 3,
                    }}
                >
                    {/* Logo + Text */}
                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                        <Box
                            sx={{
                                width: 70,
                                height: 70,
                                bgcolor: "#337d33ff",
                                borderRadius: 2,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                mr: 2,
                            }}
                        >
                            <Typography variant="h4" color="white">
                                🕌
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant="h4" fontWeight="bold" color="text.primary">
                                Mosque Hub
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Islamic Management System
                            </Typography>
                        </Box>
                    </Box>

                    {/* Form */}
                    <Box
                        component="form"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                            width: 320,
                            bgcolor: "white",
                            p: 3,
                            borderRadius: 2,
                            boxShadow: 3,
                        }}
                    >
                        {/* Heading with Crown */}
                        <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            mb: 1,
                        }}
                        >
                        <AdminPanelSettingsIcon sx={{ color: "gold", mr: 1 }} />
                        <Typography variant="h6" fontWeight="bold" color="text.primary">
                            Super Admin
                        </Typography>
                        </Box>

                        {/* Input fields */}
                        <TextField label="Email" variant="outlined" fullWidth />
                        <TextField label="Password" type="password" variant="outlined" fullWidth />

                        {/* Register Button */}
                        <Button variant="contained" color="success" fullWidth>
                            Login
                        </Button>

                        {/* Login link */}
                        <Typography variant="body2" align="center" sx={{ mt: 1 }}>
                            New to this site?{" "}
                            <Link
                                component={RouterLink}
                                to="/register"
                                underline="hover"
                                sx={{ fontWeight: "bold" }}
                            >
                                Register
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Login;