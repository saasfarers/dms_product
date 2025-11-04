import React from 'react';
import { data } from '../../datas/myprogress/data';
import { samplefunction } from '../../helpers/myprogress/helper';
import { fetchData } from '../../api/myprogress/api';
import useStyles from '../../styles/myprogress/style';

function MyProgress() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            MyProgress Component
        </div>
    );
}

export default MyProgress;