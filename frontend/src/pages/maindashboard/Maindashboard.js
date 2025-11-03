import React from 'react';
import { data } from '../../datas/maindashboard/data';
import { samplefunction } from '../../helpers/maindashboard/helper';
import { fetchData } from '../../api/maindashboard/api';
import useStyles from '../../styles/maindashboard/style';

function Maindashboard() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            Maindashboard Component
        </div>
    );
}

export default Maindashboard;