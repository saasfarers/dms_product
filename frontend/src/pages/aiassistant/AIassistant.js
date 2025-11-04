import React from 'react';
import { data } from '../../datas/aiassistant/data';
import { samplefunction } from '../../helpers/aiassistant/helper';
import { fetchData } from '../../api/aiassistant/api';
import useStyles from '../../styles/aiassistant/style';

function AIassistant() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            AIassistant Component
        </div>
    );
}

export default AIassistant;