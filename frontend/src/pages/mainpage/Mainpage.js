import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Box, Grid, Typography, Button, Paper, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";
import { mainpageData } from '../../datas/mainpage/data';
import { samplefunction } from '../../helpers/mainpage/helper';
import { superadminlogin, tenentlogin, loggedSuperadminCheck, loggedTenentCheck } from '../../api/mainpage/api';
import useStyles from '../../styles/mainpage/style';
import AppProvider from '../../contextState/AppContext';
import CircularProgress from "@mui/material/CircularProgress";
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

function Mainpage() {
    const classes = useStyles();
    const navigate = useNavigate();
    const { platform, setPlatform, language, setLanguage, user, setUser, snackbar, setSnackbar } = useContext(AppProvider);
    const page = mainpageData[platform]?.[language] || [];
    

    /* ======================================= XXX - Use State Define Section - XXX ======================================= */
        const [loading, setLoading] = useState(true);
        const initialLogin = {
            open: false,
        }
        const [loginOpen, setLoginOpen] = useState(initialLogin);
        const initialLoginData = {
            email: "",
            password: ""
        }
        const [loginData, setLoginData] = useState(initialLoginData);
    /* ======================================= XXX - Use State Define Section - XXX ======================================= */

    /* ======================================= XXX - State Set Section - XXX ======================================= */
        const handleLanguageSet = (language) => {
            try {
                localStorage.setItem("appLanguage", language);
                setLanguage(language);
            } catch (error) {
                
            }
        };
        const handleLoginOpen = (loginas) => {
            try {
                localStorage.setItem("loginAs", loginas)
                setLoginOpen(prev => ({
                    ...prev,
                    open: true,
                }));
            } catch (error) {
                
            }
        };
        const handleLoginClose = () => {
            try {
                localStorage.setItem("loginAs", "")
                setLoginOpen(initialLogin);
            } catch (error) {
                
            }
        };
        const handleLoginData = (data) => {
            try {
                setLoginData(prev => ({
                    ...prev,
                    ...data
                }));
            } catch (error) {
                console.log(error);
            }
        };
    /* ======================================= XXX - State Set Section - XXX ======================================= */

    /* ======================================= XXX - API Function Triggered - XXX ======================================= */
        const handleLoggedUserCheck = async () => {
            try {
                const loginAs = localStorage.getItem("loginAs");
                if(loginAs == "SuperAdmin"){
                    const loggedSuperadmin = await loggedSuperadminCheck();
                    if(loggedSuperadmin?.status === true ){
                        setSnackbar((prev) => ({
                            ...prev,
                            open: true,
                            message: loggedSuperadmin?.message,
                            severity: "info",
                        }));
                        navigate("/maindashboard");
                    }else{
                        setLoading(false)
                    }
                }else{
                    const loggedTenent = await loggedTenentCheck();
                    if(loggedTenent?.status === true){
                        setSnackbar((prev) => ({
                            ...prev,
                            open: true,
                            message: loggedTenent?.message,
                            severity: "info",
                        }));
                        navigate("/dashboard");
                    }else{
                        setLoading(false)
                    }
                }
            } catch (error) {
                setSnackbar((prev) => ({
                    ...prev,
                    open: true,
                    message: error?.message,
                    severity: "error",
                }));
            }
        };
        const handleLogin = async () => {
            try{
                const { email, password } = loginData;
                const payload = { email, password };
                
                const loginAs = localStorage.getItem("loginAs");
                if(loginAs == "SuperAdmin"){
                    let login = await superadminlogin(payload);
                    if(login?.status !== true){
                        setSnackbar((prev) => ({
                            ...prev,
                            open: true,
                            message: login?.message,
                            severity: "info",
                        }));
                    }else{
                        navigate("/maindashboard");
                    }
                }else{
                    let login = await tenentlogin(payload);
                    if(login?.status !== true){
                        setSnackbar((prev) => ({
                            ...prev,
                            open: true,
                            message: login?.message,
                            severity: "info",
                        }));
                    }else{
                        navigate("/dashboard");
                    }
                }
            }catch(error){
                console.log(error);
            }
        }
    /* ======================================= XXX - API Function Triggered - XXX ======================================= */

    /* ======================================= XXX - Use Effect Section - XXX ======================================= */
        useEffect(() => {
            handleLoggedUserCheck();
        }, [])
    /* ======================================= XXX - Use Effect Section - XXX ======================================= */
    

    return (
        <>
            {loading ? (
                <>
                    <Box 
                        sx={{
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <CircularProgress size={60} />
                    </Box>
                </>
            ) : (
                <>
                    <Grid container
                        sx={{
                            height: "100%",
                            display: "flex",
                            flexDirection: { xs: "row", md: "row", lg: "row" },
                            justifyContent: { xs: "center", md: "center", lg: "center" },
                            alignItems: { xs: "center", md: "center", lg: "center" },
                        }}
                    >
                        <Grid size={{ xs: 12, md: 12, lg: 12 }}>

                            <HeaderSection page={page}/>
                            <LanguageSection page={page} language={language} handleLanguageSet={handleLanguageSet}/>
                            <RoleSection page={page} handleLoginOpen={handleLoginOpen}/>
                            <LoginPopupSection page={page} handleLoginClose={handleLoginClose} loginOpen={loginOpen} handleLoginData={handleLoginData} handleLogin={handleLogin}/>
                        </Grid>
                    </Grid>
                </>
            )}
        </>
    );
}

export default Mainpage;



/* -----------------------------------------
   SUB Section (IN SAME FILE)
------------------------------------------ */

function HeaderSection({page}){
    return(
        <Grid container
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: { xs: "row", md: "row", lg: "row" },
                justifyContent: { xs: "center", md: "center", lg: "center" },
                alignItems: { xs: "center", md: "center", lg: "center" },
            }}
        >
            <Grid size={{ xs: 12, md: 4, lg: 4 }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row", lg: "row" },
                        justifyContent: { xs: "center", md: "center", lg: "center" },
                        alignItems: { xs: "center", md: "center", lg: "center" },
                    }}
                >
                    <Box
                        sx={{
                            width: 64,
                            height: 64,
                            backgroundColor: "#059669",
                            borderRadius: 2,
                            display: "flex",
                            flexDirection: { xs: "row", md: "row", lg: "row" },
                            justifyContent: { xs: "center", md: "center", lg: "center" },
                            alignItems: { xs: "center", md: "center", lg: "center" },
                            mr: 2
                        }}
                    >
                        <Typography sx={{ fontSize: 30 }}>{page?.headerSection?.icon}</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", md: "column", lg: "column" },
                            justifyContent: { xs: "center", md: "center", lg: "center" },
                            alignItems: { xs: "center", md: "center", lg: "center" },
                        }}
                    >
                        <Typography variant="h4" fontWeight="bold" color="text.primary">
                           {page?.headerSection?.title}
                        </Typography>
                        <Typography color="text.secondary">
                            {page?.headerSection?.subtitle}
                        </Typography>
                    </Box>
                </Box>
                
            </Grid>
        </Grid>
    )
}

function LanguageSection({page, language, handleLanguageSet}){
    return(
        <Grid container
            sx={{
                display: "flex",
                flexDirection: { xs: "row", md: "row", lg: "row" },
                justifyContent: { xs: "center", md: "center", lg: "center" },
                alignItems: { xs: "center", md: "center", lg: "center" },
            }}
        >
            <Grid size={{ xs: 10, md: 6, lg: 4 }}>
                <Box
                    sx={{
                        mt: 4,
                        display: "flex",
                        flexDirection: { xs: "row", md: "row", lg: "row" },
                        justifyContent: { xs: "center", md: "center", lg: "center" },
                        alignItems: { xs: "center", md: "center", lg: "center" },
                    }}
                >
                    <Paper
                        elevation={1}
                        sx={{
                            p: 1,
                            borderRadius: 2,
                            border: "1px solid #e5e7eb",
                            display: "flex",
                            flexDirection: { xs: "column", md: "column", lg: "column" },
                            justifyContent: { xs: "center", md: "center", lg: "center" },
                            alignItems: { xs: "center", md: "center", lg: "center" },
                        }}
                    >
                        <Grid container
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "row", md: "row", lg: "row" },
                                justifyContent: { xs: "center", md: "center", lg: "center" },
                                alignItems: { xs: "center", md: "center", lg: "center" },
                            }}
                        >
                            {
                                page?.languageSection?.languages?.map((data, index) => {
                                    return(
                                        <Grid size={{ xs: 12, md: 4, lg: 4 }} key={index}>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: { xs: "row", md: "row", lg: "row" },
                                                    justifyContent: { xs: "center", md: "center", lg: "center" },
                                                    alignItems: { xs: "center", md: "center", lg: "center" },
                                                }}
                                            >
                                                <Button
                                                    onClick={() => handleLanguageSet(data?.code)}
                                                    sx={{
                                                        color: "gray",
                                                        px: 3,
                                                        py: 1,
                                                        mr: 1,
                                                        display: "flex",
                                                        flexDirection: { xs: "row", md: "row", lg: "row" },
                                                        justifyContent: { xs: "center", md: "center", lg: "center" },
                                                        alignItems: { xs: "center", md: "center", lg: "center" },
                                                        backgroundColor: language === data?.code ? "#87f6d1ff" : "transparent",
                                                        "&:hover": { color: "white", backgroundColor: "#00a06bff" },
                                                    }}
                                                >
                                                    <LanguageOutlinedIcon sx={{mr: 1}}/> {data?.label}
                                                </Button>
                                            </Box>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Paper>
                </Box>
            </Grid>
        </Grid>
    )
}

function RoleSection({page, handleLoginOpen}){
    return(
        <Grid container
            sx={{
                display: "flex",
                flexDirection: { xs: "row", md: "row", lg: "row" },
                justifyContent: { xs: "center", md: "center", lg: "center" },
                alignItems: { xs: "center", md: "center", lg: "center" },
            }}
        >
            <Grid size={{ xs: 12, md: 11, lg: 8 }}>
                <Box
                    sx={{
                        mt: 4,
                        display: "flex",
                        flexDirection: { xs: "row", md: "row", lg: "row" },
                        justifyContent: { xs: "center", md: "center", lg: "center" },
                        alignItems: { xs: "center", md: "center", lg: "center" },
                    }}
                >
                    <Paper
                        sx={{
                            p: 5,
                            borderRadius: 4,
                            boxShadow: 4,
                            display: "flex",
                            flexDirection: { xs: "column", md: "column", lg: "column" },
                            justifyContent: { xs: "center", md: "center", lg: "center" },
                            alignItems: { xs: "center", md: "center", lg: "center" },
                        }}
                    >
                        <Grid container
                            sx={{
                                display: "flex",
                                flexDirection: { xs: "row", md: "row", lg: "row" },
                                justifyContent: { xs: "center", md: "center", lg: "center" },
                                alignItems: { xs: "center", md: "center", lg: "center" },
                            }}
                        >
                            <Grid size={{ xs: "auto", md: "auto", lg: "auto" }}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: { xs: "row", md: "row", lg: "row" },
                                        justifyContent: { xs: "center", md: "center", lg: "center" },
                                        alignItems: { xs: "center", md: "center", lg: "center" },
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                        textAlign="center"
                                        fontWeight="bold"
                                    >
                                        {page?.roleSection?.title}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                        
                        <Grid container spacing={2}
                            sx={{
                                mt: 4,
                                display: "flex",
                                flexDirection: { xs: "row", md: "row", lg: "row" },
                                justifyContent: { xs: "center", md: "center", lg: "center" },
                                alignItems: { xs: "center", md: "center", lg: "center" },
                            }}
                        >
                            {
                                page?.roleSection?.roles?.map((data, index) => {
                                    const Icon = data?.icon;
                                    return(
                                        <Grid size={{ xs: 12, md: 4, lg: 4 }} key={index}>
                                            <Box
                                                sx={{
                                                    p: 3,
                                                    borderRadius: 2,
                                                    border: "2px solid #e5e7eb",
                                                    backgroundColor: "#f9fafb",
                                                    cursor: "pointer",
                                                    display: "flex",
                                                    flexDirection: { xs: "row", md: "row", lg: "row" },
                                                    justifyContent: { xs: "center", md: "center", lg: "center" },
                                                    alignItems: { xs: "center", md: "center", lg: "center" },
                                                    "&:hover": {
                                                        backgroundColor: "#00a06bff",
                                                        color: "white"
                                                    },
                                                }}
                                                onClick={() => handleLoginOpen(data?.id)}
                                            >
                                                <Box 
                                                    sx={{ 
                                                        display: "flex",
                                                        flexDirection: { xs: "row", md: "row", lg: "row" },
                                                        justifyContent: { xs: "center", md: "center", lg: "center" },
                                                        alignItems: { xs: "center", md: "center", lg: "center" },
                                                        mb: 1,
                                                    }}
                                                >
                                                    <Typography 
                                                        sx={{ 
                                                            fontSize: 30, 
                                                            mr: 2 
                                                        }}
                                                    >
                                                        <Icon sx={{ fontSize: 34 }} />
                                                    </Typography>
                                                    <Typography fontWeight="bold">
                                                        {data?.label}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Grid> 
                                    )    
                                })
                            }
                        </Grid>
                    </Paper>
                </Box>
            </Grid>
        </Grid>
    )
}

function LoginPopupSection({page, handleLoginClose, loginOpen, handleLoginData, handleLogin}){
    return(
        <Dialog
            open={loginOpen.open}
            onClose={""}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            slotProps={{
                paper: {
                    sx: {
                        borderRadius: 3,           // dialog border radius
                        padding: 2,
                        width: 400,
                    },
                }
            }}
        >
            <DialogTitle 
                id="alert-dialog-title" 
                variant="h5"
                textAlign="center"
                fontWeight="bold"
            >
                {`${loginOpen.popUpName} Login`}
            </DialogTitle>
            
            <DialogContent sx={{ mt: 1 }}>
                <TextField
                    fullWidth
                    label={page?.loginPopupSection?.email}
                    variant="outlined"
                    margin="dense"
                    name="email"
                    onChange={(e) => handleLoginData({ email: e.target.value })}
                />
            
                <TextField
                    fullWidth
                    label={page?.loginPopupSection?.password}
                    type="password"
                    variant="outlined"
                    margin="dense"
                    name="password"
                    onChange={(e) => handleLoginData({ password: e.target.value })}
                />
            </DialogContent>
            
            <DialogActions sx={{ p: 2 }}>
                <Button
                    onClick={handleLoginClose}
                    variant="contained"
                    sx={{
                        borderRadius: 2,
                        backgroundColor: "red",
                        "&:hover": { backgroundColor: "#cc0000" },
                    }}
                >
                    {page?.loginPopupSection?.cancelBtn}
                </Button>
            
                <Button
                    onClick={handleLogin}
                    variant="contained"
                    sx={{
                        borderRadius: 2,
                        backgroundColor: "green",
                        "&:hover": { backgroundColor: "#008000" },
                    }}
                >
                    {page?.loginPopupSection?.loginBtn}
                </Button>
            </DialogActions>
        </Dialog>

    )
}