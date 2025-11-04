import React from 'react';
import { data } from '../../datas/sermons/data';
import { samplefunction } from '../../helpers/sermons/helper';
import { fetchData } from '../../api/sermons/api';
import useStyles from '../../styles/sermons/style';

function Sermons() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            Sermons Component
        </div>
    );
}

export default Sermons;