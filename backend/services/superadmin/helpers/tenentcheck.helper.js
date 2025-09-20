const Organization = require('../../../models/superadminmodels/organization.model');

const tenentNameTobeCheck = async (tenentName="") => {
    try {
        const tenent = await Organization.findOne({ 
            domain: tenentName,
            deleted: false,
            isActive: true, 
        });
        if (!tenent) {
            return {status: false, message: 'Tenent Name Not exists'};
        }
        return {status: true, message: tenent};
    } catch (error) {
        return {status: false, message: error};
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
            return {status: false, message: 'Tenent User Not exists'};
        }
        if (!tenent || !(await tenent.matchPassword(password))) {
            return {status: false, message: 'Invalid email or password'};
        }
        
        return {status: true, message: tenent};
    } catch (error) {
        return {status: false, message: error};
    }
}


module.exports = {
    tenentNameTobeCheck,
    tenentTobeLogin
};