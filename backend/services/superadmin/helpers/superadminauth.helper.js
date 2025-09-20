const User = require('../../../models/superadminmodels/superadmin.model');

const superAdminToBeRegister = async (name="", email="", password="") => {
    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return {status: false, message: 'User already exists'};
        }
        const user = await User.create({ name, email, password });
        return {status: true, message: user};
    } catch (error) {
        return {status: false, message: error};
    }
}
const superAdminToBeLogin = async (email="", password="") => {
    try {
        
        const user = await User.findOne({
            email,
            deleted: false,
            isActive: true,
        });
        if (!user || !(await user.matchPassword(password))) {
            return {status: false, message: 'Invalid email or password'};
        }
        user.lastLogin = new Date();
        return {status: true, message: user};
    } catch (error) {
        return {status: false, message: error};
    }
}
const superAdminToBeLoggedin = async (loggedUser="") => {
    try {
        const user = await User.findOne({
            _id: loggedUser,
            deleted: false,
            isActive: true,
        });
        if (!user) {
            return {status: false, message: 'Invalid email or password'};;
        }
        return {status: true, message: user};
    } catch (error) {
        return {status: false, message: error};
    }
}
const superAdminToBeEdited = async (loggedUser="", updateData={}) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            loggedUser,
            { $set: updateData }
        );
        if (!updatedUser) {
            return {status: false, message: updatedUser};;
        }
        return {status: true, message: updatedUser};
    } catch (error) {
        return {status: false, message: error};
    }
}


module.exports = {
    superAdminToBeRegister,
    superAdminToBeLogin,
    superAdminToBeLoggedin,
    superAdminToBeEdited
};