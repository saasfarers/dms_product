import React, { useState, useEffect, useContext } from 'react';
import { Outlet, useNavigate } from "react-router-dom";
import { Box, Grid, Typography, Button, Paper, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";
import { data } from '../../datas/componentrender/data';
import { samplefunction } from '../../helpers/componentrender/helper';
import { loggedSuperadminCheck, loggedTenentCheck } from '../../api/componentrender/api';
import useStyles from '../../styles/componentrender/style';
import AppProvider from '../../contextState/AppContext';
import CircularProgress from "@mui/material/CircularProgress";
import Sidemenu from '../sidemenu/Sidemenu';

function Componentrender() {
    const classes = useStyles();
    const navigate = useNavigate();
    const { platform, setPlatform, language, setLanguage, user, setUser, snackbar, setSnackbar } = useContext(AppProvider);
    

    /* ======================================= XXX - Use State Define Section - XXX ======================================= */
        const [loading, setLoading] = useState(true);
    /* ======================================= XXX - Use State Define Section - XXX ======================================= */

    /* ======================================= XXX - API Function Triggered - XXX ======================================= */
        const handleLoggedUserCheck = async () => {
            try {
                const loginAs = localStorage.getItem("loginAs");
                if(loginAs == "SuperAdmin"){
                    const loggedSuperadmin = await loggedSuperadminCheck();
                    if(loggedSuperadmin?.status === true ){
                        setLoading(false);
                    }else{
                        setSnackbar((prev) => ({
                            ...prev,
                            open: true,
                            message: loggedSuperadmin?.message,
                            severity: "info",
                        }));
                        navigate("/");    
                    }
                }else{
                    const loggedTenent = await loggedTenentCheck();
                    if(loggedTenent?.status === true){
                        setLoading(false);
                    }else{
                        setSnackbar((prev) => ({
                            ...prev,
                            open: true,
                            message: loggedTenent?.message,
                            severity: "info",
                        }));
                        navigate("/");
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
                            justifyContent: { xs: "flex-start", md: "flex-start", lg: "flex-start" },
                            alignItems: { xs: "flex-start", md: "flex-start", lg: "flex-start" },
                        }}
                    >
                        <Grid size={{ xs: 0, md: 3, lg: 3 }}>
                            <Sidemenu />
                        </Grid>
                        <Grid size={{ xs: 0, md: 9, lg: 9 }}>
                            <Outlet />
                        </Grid>
                    </Grid>
                </>
            )}
        </>
    );
}

export default Componentrender;