import React, { useState, useContext } from "react";
import { Outlet } from "react-router-dom";
import { languageData } from './data';
import { samplefunction } from './helper';
import { fetchData } from './api';
import useStyles from './style';
import AppContext from '../../contextState/AppContext';

function Baselayout() {
    const classes = useStyles();
    const { language, setLanguage } = useContext(AppContext);

    return (
        <>
            <Outlet />
        </>
    );
}

export default Baselayout;