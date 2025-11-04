import React from 'react';
import { data } from '../../datas/madrasah/data';
import { samplefunction } from '../../helpers/madrasah/helper';
import { fetchData } from '../../api/madrasah/api';
import useStyles from '../../styles/madrasah/style';

function Madrasah() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            Madrasah Component
        </div>
    );
}

export default Madrasah;