import React from 'react';
import { data } from '../../datas/procurement/data';
import { samplefunction } from '../../helpers/procurement/helper';
import { fetchData } from '../../api/procurement/api';
import useStyles from '../../styles/procurement/style';

function Procurement() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            Procurement Component
        </div>
    );
}

export default Procurement;