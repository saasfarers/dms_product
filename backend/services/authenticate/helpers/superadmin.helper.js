const User = require('../../../models/superadminmodels/superadmin.model');

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


module.exports = {
    superAdminToBeRegister,
    superAdminToBeLogin
};