import React from 'react';
import { data } from '../../datas/errorpage/data';
import { samplefunction } from '../../helpers/errorpage/helper';
import { fetchData } from '../../api/errorpage/api';
import useStyles from '../../styles/errorpage/style';

function ErrorPage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            ErrorPage Component
        </div>
    );
}

export default ErrorPage;