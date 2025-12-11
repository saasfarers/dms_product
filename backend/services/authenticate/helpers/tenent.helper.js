const Organizationuser = require('../../../models/organizationusers.model');

const tenentTobeLogin = async (userName="", password="") => {
    try {
        const tenent = await Organizationuser.findOne({
            userName,
            deleted: false,
            isActive: true,
        }).populate('createdBy', 'domain');
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
const tenentToBeLoggedin = async (loggedUser="") => {
    try {
        const user = await Organizationuser.findOne({
            _id: loggedUser,
            deleted: false,
            isActive: true,
        });
        if (!user) {
            return {status: false, message: 'Invalid email or password', data: ''};
        }
        return {status: true, message: 'Logged User Fetched Successfully.', data: user};
    } catch (error) {
        return {status: false, message: error, data: ''};
    }
}
const tenentToBeEdited = async (loggedUser="", updateData={}) => {
    try {
        const updatedUser = await Organizationuser.findByIdAndUpdate(
            loggedUser,
            { $set: updateData }
        );
        if (!updatedUser) {
            return {status: false, message: 'User Not Updated', data: ''};;
        }
        return {status: true, message: 'User Updated Successfully.', data: ''};
    } catch (error) {
        return {status: false, message: error, data: ''};
    }
}

module.exports = {
    tenentTobeLogin,
    tenentToBeLoggedin,
    tenentToBeEdited
};