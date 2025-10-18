const Organization = require('../../../models/superadminmodels/organization.model');

const tenentNameTobeCheck = async (tenentName="") => {
    try {
        const tenent = await Organization.findOne({ 
            domain: tenentName,
            deleted: false,
            isActive: true, 
        });
        if (!tenent) {
            return {status: false, message: 'Tenent Name Not exists', data: ''};
        }
        return {status: true, message: 'Tenent Checked Successfully.', data: tenent};
    } catch (error) {
        return {status: false, message: error, data: ''};
    }
}

const tenentTobeLogin = async (userName="", password="") => {
    try {
        const tenent = await Organization.findOne({
            userName,
            deleted: false,
            isActive: true,
        });
        if (!tenent) {
            return {status: false, message: 'Tenent User Not exists', data: ''};
        }
        if (!tenent || !(await tenent.matchPassword(password))) {
            return {status: false, message: 'Invalid email or password', data: ''};
        }
        
        return {status: true, message: 'User Fetched Successfully.', data: tenent};
    } catch (error) {
        return {status: false, message: 'Internal Server Error.', data: error};
    }
}

module.exports = {
    tenentNameTobeCheck,
    tenentTobeLogin
};