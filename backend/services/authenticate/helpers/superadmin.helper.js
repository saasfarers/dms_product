const User = require('../../../models/superadmin.model');

const superAdminToBeRegister = async (name="", email="", password="") => {
    try {
        const userExists = await User.findOne({ email });
        if (userExists) {
            return {status: false, message: 'User already exists', data: userExists};
        }
        const user = await User.create({ name, email, password });
        return {status: true, message: 'User Created Successfully.', data: user};
    } catch (error) {
        return {status: false, message: error,  data: ''};
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
            return {status: false, message: 'Invalid email or password', data: ''};
        }
        user.lastLogin = new Date();
        return {status: true, message: 'User Fetched Successfully.', data: user};
    } catch (error) {
        return {status: false, message: error, data: ''};
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
            return {status: false, message: 'Invalid email or password', data: ''};
        }
        return {status: true, message: 'Logged User Fetched Successfully.', data: user};
    } catch (error) {
        return {status: false, message: error, data: ''};
    }
}
const superAdminToBeEdited = async (loggedUser="", updateData={}) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
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
    superAdminToBeRegister,
    superAdminToBeLogin,
    superAdminToBeLoggedin,
    superAdminToBeEdited
};