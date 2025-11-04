import React from 'react';
import { data } from '../../datas/facilities/data';
import { samplefunction } from '../../helpers/facilities/helper';
import { fetchData } from '../../api/facilities/api';
import useStyles from '../../styles/facilities/style';

function Facilities() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            Facilities Component
        </div>
    );
}

export default Facilities;