import React from 'react';
import { data } from '../../datas/familyassistance/data';
import { samplefunction } from '../../helpers/familyassistance/helper';
import { fetchData } from '../../api/familyassistance/api';
import useStyles from '../../styles/familyassistance/style';

function FamilyAssistance() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            FamilyAssistance Component
        </div>
    );
}

export default FamilyAssistance;