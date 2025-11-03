import React from 'react';
import { Outlet } from "react-router-dom";
import { data } from '../../datas/baselayout/data';
import { samplefunction } from '../../helpers/baselayout/helper';
import { fetchData } from '../../api/baselayout/api';
import useStyles from '../../styles/baselayout/style';

function Baselayout() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            Baselayout Component
            <Outlet />
        </div>
    );
}

export default Baselayout;