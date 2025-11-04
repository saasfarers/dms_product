import React from 'react';
import { data } from '../../datas/settings/data';
import { samplefunction } from '../../helpers/settings/helper';
import { fetchData } from '../../api/settings/api';
import useStyles from '../../styles/settings/style';

function Settings() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            Settings Component
        </div>
    );
}

export default Settings;