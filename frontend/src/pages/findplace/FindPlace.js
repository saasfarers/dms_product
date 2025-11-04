import React from 'react';
import { data } from '../../datas/findplace/data';
import { samplefunction } from '../../helpers/findplace/helper';
import { fetchData } from '../../api/findplace/api';
import useStyles from '../../styles/findplace/style';

function FindPlace() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            FindPlace Component
        </div>
    );
}

export default FindPlace;