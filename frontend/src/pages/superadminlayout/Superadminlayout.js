import React from 'react';
import { data } from './data';
import { samplefunction } from './helper';
import { fetchData } from './api';
import useStyles from './style';

function Superadminlayout() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            Superadminlayout Component
        </div>
    );
}

export default Superadminlayout;