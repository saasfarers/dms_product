import React from 'react';
import { LayoutData } from './Layout.data';
import { sampleLayoutfunction } from './Layout.helper';
import { fetchLayoutData } from './Layout.api';
import useStyles from './Layout.style';

function Layout() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            Layout Component
        </div>
    );
}

export default Layout;