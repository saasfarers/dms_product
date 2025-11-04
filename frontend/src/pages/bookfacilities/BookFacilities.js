import React from 'react';
import { data } from '../../datas/bookfacilities/data';
import { samplefunction } from '../../helpers/bookfacilities/helper';
import { fetchData } from '../../api/bookfacilities/api';
import useStyles from '../../styles/bookfacilities/style';

function BookFacilities() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            BookFacilities Component
        </div>
    );
}

export default BookFacilities;