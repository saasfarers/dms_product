import React from 'react';
import { data } from './data';
import { samplefunction } from './helper';
import { fetchData } from './api';
import useStyles from './style';

function Memberlayout() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            Memberlayout Component
        </div>
    );
}

export default Memberlayout;