import React from 'react';
import { data } from '../../datas/staffmanagement/data';
import { samplefunction } from '../../helpers/staffmanagement/helper';
import { fetchData } from '../../api/staffmanagement/api';
import useStyles from '../../styles/staffmanagement/style';

function StaffManagement() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            StaffManagement Component
        </div>
    );
}

export default StaffManagement;