const Organization = require('../../../models/organization.model');

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

module.exports = {
    tenentNameTobeCheck,
};