import React from 'react';
import { data } from '../../datas/events/data';
import { samplefunction } from '../../helpers/events/helper';
import { fetchData } from '../../api/events/api';
import useStyles from '../../styles/events/style';

function Events() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            Events Component
        </div>
    );
}

export default Events;