import React from 'react';
import { Outlet } from "react-router-dom";
import { } from './Loggedlayout.data';
import { } from './Loggedlayout.helper';
import { } from './Loggedlayout.api';
import useStyles from './Loggedlayout.style';
import Sidemenu from '../sidemenu/Sidemenu'

function Loggedlayout() {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <div className={classes.sidebar}>
                    <Sidemenu />
                </div>

                <div className={classes.content}>
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default Loggedlayout;