import React from 'react';
import { data } from './data';
import { samplefunction } from './helper';
import { fetchData } from './api';
import useStyles from './style';

function Stafflayout() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            Stafflayout Component
        </div>
    );
}

export default Stafflayout;