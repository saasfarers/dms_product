import React from 'react';
import {
    Container,
    Box,
} from "@mui/material";
import { Outlet } from "react-router-dom";
import { LayoutData } from './Layout.data';
import { sampleLayoutfunction } from './Layout.helper';
import { fetchLayoutData } from './Layout.api';
import useStyles from './Layout.style';

function Layout() {
    const classes = useStyles();

    return (
        <>
            <Container maxWidth={false} disableGutters>
                <Outlet/>
            </Container>
        </>
    );
}

export default Layout;