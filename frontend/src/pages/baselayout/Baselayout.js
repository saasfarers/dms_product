import React, { useState, useEffect, useContext } from 'react';
import { Outlet } from "react-router-dom";
import { data } from '../../datas/baselayout/data';
import { samplefunction } from '../../helpers/baselayout/helper';
import { tenentCheck } from '../../api/baselayout/api';
import useStyles from '../../styles/baselayout/style';
import Box from '@mui/material/Box';
import CircularProgress from "@mui/material/CircularProgress";
import AppProvider from '../../contextState/AppContext';

function Baselayout() {
    const classes = useStyles();
    const { platform, setPlatform, language, setLanguage, user, setUser, snackbar, setSnackbar } = useContext(AppProvider);
    const [loading, setLoading] = useState(false);


    /* -----------------------------------------
        Tenent Check Fetch Section
    ------------------------------------------ */
    const handleTenentCheck = async (url) => {
        try {
            const tenentCheckFetch = await tenentCheck(url.hostname)
            if(tenentCheckFetch?.status == true){
                setPlatform(tenentCheckFetch?.data?.platform);
                setLanguage(localStorage.getItem("appLanguage") || "en");
                setLoading(false);
            }else{
                setSnackbar((prev) => ({
                    ...prev,
                    open: true,
                    message: tenentCheckFetch?.message,
                    severity: "info",
                }));
            }
        } catch (error) {
            setSnackbar((prev) => ({
                ...prev,
                open: true,
                message: error,
                severity: "error",
            }));
        }
    };
    useEffect(() => {
        const url = new URL(window?.location?.href);
        handleTenentCheck(url);
    }, [])
    /* -----------------------------------------
        Tenent Check Fetch Section
    ------------------------------------------ */


    return (
        <Box 
            sx={{ 
                position: "fixed", 
                bgcolor: "#c9f4e6ff", 
                height: "100%", 
                width: "100%", 
                overflowY: "auto",
                "&::-webkit-scrollbar": {
                    display: "none",
                },
                scrollbarWidth: "none",
                msOverflowStyle: "none",
            }}
        >
            {loading ? (
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
            ) : (
                <Outlet />
            )}
        </Box>
    );
}

export default Baselayout;