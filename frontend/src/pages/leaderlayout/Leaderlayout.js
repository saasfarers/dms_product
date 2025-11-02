import React from 'react';
import { data } from './data';
import { samplefunction } from './helper';
import { fetchData } from './api';
import useStyles from './style';

function Leaderlayout() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            Leaderlayout Component
        </div>
    );
}

export default Leaderlayout;