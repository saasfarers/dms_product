import React from 'react';
import { data } from '../../datas/analytics/data';
import { samplefunction } from '../../helpers/analytics/helper';
import { fetchData } from '../../api/analytics/api';
import useStyles from '../../styles/analytics/style';

function Analytics() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            Analytics Component
        </div>
    );
}

export default Analytics;