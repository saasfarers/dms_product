import React from 'react';
import { data } from '../../datas/donations/data';
import { samplefunction } from '../../helpers/donations/helper';
import { fetchData } from '../../api/donations/api';
import useStyles from '../../styles/donations/style';

function Donations() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            Donations Component
        </div>
    );
}

export default Donations;