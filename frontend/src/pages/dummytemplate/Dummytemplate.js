import React from 'react';
import { Box, Grid, Typography, Button, Paper, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@mui/material";
import { data } from '../../datas/dummytemplate/data';
import { samplefunction } from '../../helpers/dummytemplate/helper';
import { fetchData } from '../../api/dummytemplate/api';
import useStyles from '../../styles/dummytemplate/style';

function Dummytemplate() {
    const classes = useStyles();

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "column", lg: "column" },
                justifyContent: { xs: "flex-start", md: "flex-start", lg: "flex-start" },
                alignItems: { xs: "flex-start", md: "flex-start", lg: "flex-start" },
            }}
        >
            <Grid container
                sx={{
                    display: "flex",
                    flexDirection: { xs: "row", md: "row", lg: "row" },
                    justifyContent: { xs: "flex-start", md: "flex-start", lg: "flex-start" },
                    alignItems: { xs: "flex-start", md: "flex-start", lg: "flex-start" },
                }}
            >
                <Grid size={{ xs: 12, md: 12, lg: 12 }}>
                    <h1>Dashboad</h1>
                </Grid>
            </Grid>
            <Grid container
                sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: { xs: "row", md: "row", lg: "row" },
                    justifyContent: { xs: "flex-start", md: "flex-start", lg: "flex-start" },
                    alignItems: { xs: "flex-start", md: "flex-start", lg: "flex-start" },
                }}
            >
                <Grid size={{ xs: 12, md: 12, lg: 12 }}>
                    <h1>Dashboad</h1>
                </Grid>
            </Grid>
            <Grid container
                sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: { xs: "row", md: "row", lg: "row" },
                    justifyContent: { xs: "flex-start", md: "flex-start", lg: "flex-start" },
                    alignItems: { xs: "flex-start", md: "flex-start", lg: "flex-start" },
                }}
            >
                <Grid size={{ xs: 12, md: 12, lg: 12 }}>
                    <h1>Dashboad</h1>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Dummytemplate;