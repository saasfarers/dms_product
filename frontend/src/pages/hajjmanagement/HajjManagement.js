import React from 'react';
import { data } from '../../datas/hajjmanagement/data';
import { samplefunction } from '../../helpers/hajjmanagement/helper';
import { fetchData } from '../../api/hajjmanagement/api';
import useStyles from '../../styles/hajjmanagement/style';

function HajjManagement() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            HajjManagement Component
        </div>
    );
}

export default HajjManagement;