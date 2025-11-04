import React from 'react';
import { data } from '../../datas/financialmanagement/data';
import { samplefunction } from '../../helpers/financialmanagement/helper';
import { fetchData } from '../../api/financialmanagement/api';
import useStyles from '../../styles/financialmanagement/style';

function FinancialManagement() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            FinancialManagement Component
        </div>
    );
}

export default FinancialManagement;