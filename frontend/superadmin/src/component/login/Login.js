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
                                {LoginData[language].hub}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                {LoginData[language].system}
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
                            {LoginData[language].admin}
                        </Typography>
                        </Box>

                        {/* Input fields */}
                        <TextField label={LoginData[language].email} variant="outlined" fullWidth />
                        <TextField label={LoginData[language].password} type="password" variant="outlined" fullWidth />

                        {/* Register Button */}
                        <Button variant="contained" color="success" fullWidth>
                            {LoginData[language].login}
                        </Button>

                        {/* Login link */}
                        <Typography variant="body2" align="center" sx={{ mt: 1 }}>
                            {LoginData[language].newsite}{" "}
                            <Link
                                component={RouterLink}
                                to="/register"
                                underline="hover"
                                sx={{ fontWeight: "bold" }}
                            >
                                {LoginData[language].register}
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Login;