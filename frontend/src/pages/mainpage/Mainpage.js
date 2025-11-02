import React from 'react';
import { data } from './data';
import { samplefunction } from './helper';
import { fetchData } from './api';
import useStyles from './style';

function Mainpage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            Mainpage Component
        </div>
    );
}

export default Mainpage;