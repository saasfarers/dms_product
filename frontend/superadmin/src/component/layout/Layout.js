import React, { useEffect, useContext } from 'react';
import {
    Container,
    Box,
} from "@mui/material";
import { Outlet, useNavigate, useLocation  } from "react-router-dom";
import { LayoutData } from './Layout.data';
import { sampleLayoutfunction } from './Layout.helper';
import { fetchLayoutData, loggeduser } from './Layout.api';
import useStyles from './Layout.style';
import AppContext from '../../contextState/AppContext';

function Layout() {
    const classes = useStyles();
    const navigate = useNavigate();
    const location = useLocation();
    const { setUser, setLanguage } = useContext(AppContext);

    useEffect(() => {
        const handleLoggedUser = async () => {
            const loggedUser = await loggeduser();
            if (loggedUser?.status === true) {
                setLanguage(loggedUser.message.language);
                if (location.pathname === "/login" || location.pathname === "/register") {
                    navigate("/dashboard");
                }
            } else {
                setLanguage('en');
                if (location.pathname !== "/login" && location.pathname !== "/register") {
                    navigate("/login");
                }
            }
        };
        handleLoggedUser();
    }, [location.pathname]);

    return (
        <>
            <Container maxWidth={false} disableGutters>
                <Outlet/>
            </Container>
        </>
    );
}

export default Layout;