import React, { useState, useContext } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
} from "@mui/material";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { LoginData } from './Login.data';
import { } from './Login.helper';
import { login } from './Login.api';
// import useStyles from './Login.style';
import AppContext from '../../contextState/AppContext';

function Login() {
    // const classes = useStyles();
    const navigate = useNavigate();
    const { language, setLanguage, setSnackbar } = useContext(AppContext);

    const initialpagedata = {
        email : "",
        password : ""
    }
    const [pageData, setPageData] = useState(initialpagedata);

    const handleSetPageData = (e) => {
        try {
            const { name, value } = e.target;
            setPageData((prev) => ({
                ...prev,
                [name]: value
            }));
        } catch (error) {
            console.log(error)
        }
    };
    const handleLogin = async () => {
        try {
            const dataLogin = await login(pageData);
            if (dataLogin?.status === true) {
                setPageData(initialpagedata);
                setSnackbar((prev) => ({
                    ...prev,
                    open : true,
                    message : dataLogin?.message,
                    severity : "success"
                }));
                setLanguage(dataLogin.data.language);
                navigate('/dashboard')
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
                        <TextField label={LoginData[language].email} variant="outlined" fullWidth name="email" value={pageData.email} onChange={(e) => handleSetPageData(e)}/>
                        <TextField label={LoginData[language].password} type="password" variant="outlined" fullWidth name="password" value={pageData.password} onChange={(e) => handleSetPageData(e)}/>

                        {/* Register Button */}
                        <Button variant="contained" color="success" fullWidth onClick={(e) => handleLogin()}>
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