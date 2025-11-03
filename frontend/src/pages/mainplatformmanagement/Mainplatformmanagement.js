import React from 'react';
import { data } from '../../datas/mainplatformmanagement/data';
import { samplefunction } from '../../helpers/mainplatformmanagement/helper';
import { fetchData } from '../../api/mainplatformmanagement/api';
import useStyles from '../../styles/mainplatformmanagement/style';

function Mainplatformmanagement() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            Mainplatformmanagement Component
        </div>
    );
}

export default Mainplatformmanagement;