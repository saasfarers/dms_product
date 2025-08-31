import React, { useContext } from 'react';
import { RegisterData } from './Register.data';
import { sampleRegisterfunction } from './Register.helper';
import { fetchRegisterData } from './Register.api';
import useStyles from './Register.style';
import AppContext from '../../contextState/AppContext';

function Register() {
    const classes = useStyles();
    const { language } = useContext(AppContext);

    return (
        <div className={classes.root}>
            {RegisterData[language].Register_key}
        </div>
    );
}

export default Register;