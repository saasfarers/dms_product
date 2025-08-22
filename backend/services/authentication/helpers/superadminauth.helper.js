const User = require('../models/superadmin.model');

const userToBeRegister = async (name="", email="", password="") => {
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
const userToBeLogin = async (email="", password="") => {
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
const userToBeLoggedin = async (loggedUser="") => {
    try {
        if (!loggedUser) {
            return {status: false, message: 'Invalid email or password'};;
        }
        return {status: true, message: loggedUser};
    } catch (error) {
        return {status: false, message: error};
    }
}


module.exports = {
    userToBeRegister,
    userToBeLogin,
    userToBeLoggedin,
};