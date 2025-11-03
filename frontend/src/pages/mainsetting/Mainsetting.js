import React from 'react';
import { data } from '../../datas/mainsetting/data';
import { samplefunction } from '../../helpers/mainsetting/helper';
import { fetchData } from '../../api/mainsetting/api';
import useStyles from '../../styles/mainsetting/style';

function Mainsetting() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            Mainsetting Component
        </div>
    );
}

export default Mainsetting;