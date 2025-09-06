import React, { useContext , useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
} from "@mui/material";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { CircularProgress } from "@mui/material";
import { RegisterData } from './Register.data';
import { sampleRegisterfunction, handleSetPageData } from './Register.helper';
import { fetchRegisterData, handleRegister, handleLoggedUser } from './Register.api';
import useStyles from './Register.style';
import AppContext from '../../contextState/AppContext';

function Register() {
    const classes = useStyles();
    const navigate = useNavigate();
    const { language, setSnackbar } = useContext(AppContext);

    const initialpagedata = {
        name : "",
        email : "",
        password : ""
    }
    const [pageData, setPageData] = useState(initialpagedata);

    useEffect(() => {
        handleLoggedUser(navigate, setSnackbar);
    }, []);


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
                                {RegisterData[language].hub}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                {RegisterData[language].system}
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
                            {RegisterData[language].admin}
                        </Typography>
                        </Box>

                        {/* Input fields */}
                        <TextField label={RegisterData[language].name} variant="outlined" fullWidth name="name" value={pageData.name} onChange={(e) => handleSetPageData(e, setPageData)}/>
                        <TextField label={RegisterData[language].email} variant="outlined" fullWidth name="email" value={pageData.email} onChange={(e) => handleSetPageData(e, setPageData)}/>
                        <TextField label={RegisterData[language].password} type="password" variant="outlined" fullWidth name="password" value={pageData.password} onChange={(e) => handleSetPageData(e, setPageData)}/>

                        {/* Register Button */}
                        <Button variant="contained" color="success" fullWidth onClick={(e) => handleRegister(pageData, setPageData, navigate, setSnackbar) }>
                            {RegisterData[language].register}
                        </Button>

                        {/* Login link */}
                        <Typography variant="body2" align="center" sx={{ mt: 1 }}>
                            {RegisterData[language].haveaccount}{" "}
                            <Link
                                component={RouterLink}
                                to="/login"
                                underline="hover"
                                sx={{ fontWeight: "bold" }}
                            >
                                {RegisterData[language].login}
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>     
        </>
    );
}

export default Register;