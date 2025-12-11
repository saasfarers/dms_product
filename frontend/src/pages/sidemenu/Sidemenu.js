import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Box, Grid, Typography, Select, MenuItem, Button } from "@mui/material";
import { sidemenuData } from '../../datas/sidemenu/data';
import { samplefunction } from '../../helpers/sidemenu/helper';
import { superadminlogout, tenentlogout } from '../../api/sidemenu/api';
import useStyles from '../../styles/sidemenu/style';
import AppProvider from '../../contextState/AppContext';


function Sidemenu() {
    const classes = useStyles();
    const navigate = useNavigate();
    const { platform, setPlatform, language, setLanguage, user, setUser, snackbar, setSnackbar } = useContext(AppProvider);
    const page = sidemenuData[platform]?.[language] || [];

    /* ======================================= XXX - State Set Section - XXX ======================================= */
        const handleLanguageSet = (e) => {
            try {
                const language = e.target.value;
                localStorage.setItem("appLanguage", language);
                setLanguage(language);
            } catch (error) {
                
            }
        };
    /* ======================================= XXX - State Set Section - XXX ======================================= */

    /* ======================================= XXX - API Function Triggered - XXX ======================================= */
        const handleLogout = async (e) => {
            try {
                const loginAs = localStorage.getItem("loginAs");
                if(loginAs == "SuperAdmin"){
                    const logout = await superadminlogout();
                    if(logout?.status !== true){
                        setSnackbar((prev) => ({
                            ...prev,
                            open: true,
                            message: logout?.message,
                            severity: "info",
                        }));
                    }else{
                        localStorage.clear();
                        navigate("/");
                    }
                }else{
                    const logout = await tenentlogout();
                    if(logout?.status !== true){
                        setSnackbar((prev) => ({
                            ...prev,
                            open: true,
                            message: logout?.message,
                            severity: "info",
                        }));
                    }else{
                        localStorage.clear();
                        navigate("/");
                    }
                }
            } catch (error) {
                
            }
        };
    /* ======================================= XXX - API Function Triggered - XXX ======================================= */

    return (
        <>
            <Grid container
                sx={{
                    backgroundColor: "white",
                    position: "fixed",
                    overflowY: "auto","&::-webkit-scrollbar": {
                        display: "none",
                    },
                    scrollbarWidth: "none",
                    msOverflowStyle: "none", 
                    height: "100%",
                    width: "20%",
                    p: 1,
                    display: "flex",
                    flexDirection: { xs: "row", md: "row", lg: "row" },
                    justifyContent: { xs: "flex-start", md: "flex-start", lg: "flex-start" },
                    alignItems: { xs: "flex-start", md: "flex-start", lg: "flex-start" },
                }}
            >
                <Grid size={{ xs: 12, md: 12, lg: 12 }}>
                    
                    <HeaderSection page={page}/>
                    <SubheaderSection page={page}/>
                    <MenuSection page={page}/>
                    <FooterSection page={page} handleLanguageSet={handleLanguageSet} language={language} handleLogout={handleLogout}/>
                    
                </Grid>
            </Grid>
        </>
    );
}

export default Sidemenu;


/* -----------------------------------------
   SUB Section (IN SAME FILE)
------------------------------------------ */
function HeaderSection({page}){
    return(
        <Grid container
            sx={{
                mt: 2,
                display: "flex",
                flexDirection: { xs: "row", md: "row", lg: "row" },
                justifyContent: { xs: "center", md: "center", lg: "center" },
                alignItems: { xs: "center", md: "center", lg: "center" },
            }}
        >
            <Grid size={{ xs: 12, md: 12, lg: 12 }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "row", md: "row", lg: "row" },
                        justifyContent: { xs: "flex-start", md: "flex-start", lg: "flex-start" },
                        alignItems: { xs: "flex-start", md: "flex-start", lg: "flex-start" },
                    }}
                >
                    <Box
                        sx={{
                            width: 60,
                            height: 60,
                            backgroundColor: "#059669",
                            borderRadius: 2,
                            display: "flex",
                            flexDirection: { xs: "row", md: "row", lg: "row" },
                            justifyContent: { xs: "center", md: "center", lg: "center" },
                            alignItems: { xs: "center", md: "center", lg: "center" },
                            mr: 2
                        }}
                    >
                        <Typography sx={{ fontSize: 25 }}>{page?.headerSection?.icon}</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", md: "column", lg: "column" },
                            justifyContent: { xs: "center", md: "center", lg: "center" },
                            alignItems: { xs: "flex-start", md: "flex-start", lg: "flex-start" },
                        }}
                    >
                        <Typography variant="h4" fontWeight="bold" color="text.primary" sx={{fontSize: 30}}>
                            {page?.headerSection?.title}
                        </Typography>
                        <Typography color="text.secondary" sx={{fontSize: 15}}>
                            {page?.headerSection?.subtitle}
                        </Typography>
                    </Box>   
                </Box>
            </Grid>
        </Grid>
    )
}

function SubheaderSection({page}){
    return(
        <Grid container
            sx={{
                mt: 2,
                display: "flex",
                flexDirection: { xs: "column", md: "column", lg: "column" },
                justifyContent: { xs: "center", md: "center", lg: "center" },
                alignItems: { xs: "center", md: "center", lg: "center" },
            }}
        >
            <Grid size={{ xs: 12, md: 12, lg: 12 }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "column", lg: "column" },
                        justifyContent: { xs: "center", md: "center", lg: "center" },
                        alignItems: { xs: "center", md: "center", lg: "center" },
                    }}
                >
                    <Box
                        sx={{
                            width: "80%",
                            height: 40,
                            backgroundColor: "#d5f1e9ff",
                            borderRadius: 2,
                            display: "flex",
                            flexDirection: { xs: "column", md: "column", lg: "column" },
                            justifyContent: { xs: "center", md: "center", lg: "center" },
                            alignItems: { xs: "center", md: "center", lg: "center" },
                        }}
                    >
                        <Typography sx={{ fontSize: 18, color: "#007751ff"  }}>Platform Admin</Typography>
                    </Box>  
                </Box>
            </Grid>
        </Grid>
    )
}

function MenuSection({page}){
    return(
        <Grid container
            sx={{
                mt: 5,
                display: "flex",
                flexDirection: { xs: "column", md: "column", lg: "column" },
                justifyContent: { xs: "center", md: "center", lg: "center" },
                alignItems: { xs: "center", md: "center", lg: "center" },
            }}
        >
            {
                page?.menuSection?.menus?.map((data, index) => {
                    const Icon = data?.icon;
                    return(
                        <Grid size={{ xs: 12, md: 12, lg: 12 }} key={index}>
                            <Box
                                component={Link}
                                to={data?.path}  
                                sx={{
                                    mt: 3,
                                    display: "flex",
                                    flexDirection: { xs: "column", md: "column", lg: "column" },
                                    justifyContent: { xs: "center", md: "center", lg: "center" },
                                    alignItems: { xs: "center", md: "center", lg: "center" },
                                    textDecoration: "none", 
                                    "&:hover": { backgroundColor: "#d5f1e9ff" }
                                }}
                            >
                                <Box
                                    sx={{
                                        width: "90%",
                                        height: 60,
                                        pl: 2,
                                        borderRadius: 3,
                                        display: "flex",
                                        flexDirection: { xs: "row", md: "row", lg: "row" },
                                        justifyContent: { xs: "flex-start", md: "flex-start", lg: "flex-start" },
                                        alignItems: { xs: "center", md: "center", lg: "center" },
                                    }}
                                >
                                    <Icon sx={{ fontSize: 30, color: "#007751ff", mr: 2 }} />
                                    <Typography sx={{ fontSize: 20, color: "#007751ff"  }}>{data?.label}</Typography>
                                </Box>  
                            </Box>
                        </Grid>
                    ) 
                })
            }
        </Grid>
    )
}

function FooterSection({page, handleLanguageSet, language, handleLogout}){
    const Icon = page?.exitSection?.icon;
    return(
        <Grid container
            sx={{
                mt: 8,
                display: "flex",
                flexDirection: { xs: "column", md: "column", lg: "column" },
                justifyContent: { xs: "center", md: "center", lg: "center" },
                alignItems: { xs: "center", md: "center", lg: "center" },
            }}
        >
            <Grid size={{ xs: 12, md: 12, lg: 12 }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "column", lg: "column" },
                        justifyContent: { xs: "center", md: "center", lg: "center" },
                        alignItems: { xs: "center", md: "center", lg: "center" },
                    }}
                >
                    <Box
                        sx={{
                            width: "80%",
                            height: 30,
                            borderRadius: 2,
                            display: "flex",
                            flexDirection: { xs: "column", md: "column", lg: "column" },
                            justifyContent: { xs: "center", md: "center", lg: "center" },
                            alignItems: { xs: "center", md: "center", lg: "center" },
                            "&:hover": { color: "white", backgroundColor: "#d5f1e9ff" },
                        }}
                    >
                        {
                            page?.languageSection?.languages?.length > 0 && (
                                <Select
                                    value={language ?? "en"}
                                    onChange={(e) => handleLanguageSet(e)}
                                    variant="standard"
                                    disableUnderline
                                    sx={{
                                    fontSize: 15,
                                    fontWeight: "bold",
                                    color: "#007751ff",
                                    width: "100%",
                                    textAlign: "center",
                                    }}
                                >
                                    {
                                        page?.languageSection?.languages?.map((data, index) => {
                                            return(
                                                <MenuItem value={data?.code} key={index}>{data?.label}</MenuItem>
                                            )
                                        })
                                    }
                                </Select>
                            )
                        }
                    </Box>  
                </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 12, lg: 12 }}>
                <Box
                    sx={{
                        mt: 2,
                        display: "flex",
                        flexDirection: { xs: "column", md: "column", lg: "column" },
                        justifyContent: { xs: "center", md: "center", lg: "center" },
                        alignItems: { xs: "center", md: "center", lg: "center" },
                    }}
                >
                    <Box
                        sx={{
                            width: "80%",
                            height: 30,
                            borderRadius: 3,
                            display: "flex",
                            flexDirection: { xs: "column", md: "column", lg: "column" },
                            justifyContent: { xs: "center", md: "center", lg: "center" },
                            alignItems: { xs: "center", md: "center", lg: "center" },
                        }}
                    >
                        <Button
                            sx={{
                                color: "#ff0000ff",
                                px: 3,
                                py: 1,
                                mr: 3,
                                display: "flex",
                                flexDirection: { xs: "row", md: "row", lg: "row" },
                                justifyContent: { xs: "center", md: "center", lg: "center" },
                                alignItems: { xs: "center", md: "center", lg: "center" },
                                "&:hover": { color: "white", backgroundColor: "#f79292ff" },
                            }}
                            onClick={() => handleLogout()}
                        >
                            {page?.exitSection?.icon && (
                                <page.exitSection.icon sx={{ mr: 1 }} />
                            )} {page?.exitSection?.exitbtn}
                        </Button>
                    </Box>  
                </Box>
            </Grid>
        </Grid>
    )
}