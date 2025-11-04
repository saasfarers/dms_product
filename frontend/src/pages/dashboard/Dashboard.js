import React from 'react';
import { data } from '../../datas/dashboard/data';
import { samplefunction } from '../../helpers/dashboard/helper';
import { fetchData } from '../../api/dashboard/api';
import useStyles from '../../styles/dashboard/style';

function Dashboard() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            Dashboard Component
        </div>
    );
}

export default Dashboard;