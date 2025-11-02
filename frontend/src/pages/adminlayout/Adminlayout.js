import React from 'react';
import { data } from './data';
import { samplefunction } from './helper';
import { fetchData } from './api';
import useStyles from './style';

function Adminlayout() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            Adminlayout Component
        </div>
    );
}

export default Adminlayout;