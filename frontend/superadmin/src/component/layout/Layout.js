import React, { useEffect, useContext } from 'react';
import {
    Container,
} from "@mui/material";
import { Outlet, useNavigate, useLocation  } from "react-router-dom";
import { } from './Layout.data';
import { } from './Layout.helper';
import { loggeduser } from './Layout.api';
// import useStyles from './Layout.style';
import AppContext from '../../contextState/AppContext';

function Layout() {
    // const classes = useStyles();
    const navigate = useNavigate();
    const location = useLocation();
    const { setLanguage } = useContext(AppContext);

    useEffect(() => {
        const handleLoggedUser = async () => {
            try {
                const loggedUser = await loggeduser();
                if (loggedUser?.status === true) {
                    setLanguage(loggedUser.data.language);
                    if (location.pathname === "/login" || location.pathname === "/register") {
                        navigate("/dashboard", { replace: true });
                    }
                } else {
                    setLanguage('en');
                    if (location.pathname !== "/login" && location.pathname !== "/register") {
                        navigate("/login", { replace: true });
                    }
                }
            } catch (error) {
                console.log(error)
            }
        };
        handleLoggedUser();
    }, []);

    return (
        <>
            <Container maxWidth={false} disableGutters>
                <Outlet/>
            </Container>
        </>
    );
}

export default Layout;