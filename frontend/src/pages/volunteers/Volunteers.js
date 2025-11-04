import React from 'react';
import { data } from '../../datas/volunteers/data';
import { samplefunction } from '../../helpers/volunteers/helper';
import { fetchData } from '../../api/volunteers/api';
import useStyles from '../../styles/volunteers/style';

function Volunteers() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            Volunteers Component
        </div>
    );
}

export default Volunteers;