import React from 'react';
import { data } from '../../datas/mainpage/data';
import { samplefunction } from '../../helpers/mainpage/helper';
import { fetchData } from '../../api/mainpage/api';
import useStyles from '../../styles/mainpage/style';

function Mainpage() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            Mainpage Component
        </div>
    );
}

export default Mainpage;