const { superAdminToBeRegister, superAdminToBeLogin, superAdminToBeLoggedin, superAdminToBeEdited } = require('../helpers/superadminauth.helper');
const { generateAccessToken, generateRefreshToken } = require('../../../shared/utils/generatedToken');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");


const register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const user = await superAdminToBeRegister(name, email, password);
        if(user.status == false){
            throw new Error(user.message);
        }

        return res.status(200).json({
            status: true,
            message: user.message,
        });
    } catch (error) {
        next(error);
    }
};
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await superAdminToBeLogin(email, password);
        if(user.status == false){
            throw new Error(user.message);
        }
        const accessToken = generateAccessToken(user.message._id);
        const refreshToken = generateRefreshToken(user.message._id);

        res.cookie('adminaccessToken', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: parseInt(process.env.JWT_ACCESS_SECRET_MAX_AGE, 10),
        });
        res.cookie('adminrefreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: parseInt(process.env.JWT_REFRESH_SECRET_MAX_AGE, 10),
        });

        res.status(200).json({
            status: true,
            message: user.message,
        });
    } catch (error) {
        next(error);
    }
};
const loggeduser = async (req, res, next) => {
    try {
        const loggedUser = req.loggedUser;
        const user = await superAdminToBeLoggedin(loggedUser);
        if(user.status == false){
            throw new Error(user.message);
        }
        res.status(200).json({ status: true, message: user.message });
    } catch (error) {
        next(error);
    }
};
const loggeduseredit = async (req, res, next) => {
    try {
        const loggedUser = req.loggedUser;
        // Pick only allowed fields from req.body
        const {
            name,
            email,
            password,
            role,
            language,
            isActive
        } = req.body;

        // Build update object dynamically
        const updateData = {};
        if (name) updateData.name = name;
        if (email) updateData.email = email;
        if (role) updateData.role = role;
        if (language) updateData.language = language;
        if (typeof isActive !== "undefined") updateData.isActive = isActive;

        // If password is provided, hash it before saving
        if (password) {
            const salt = await bcrypt.genSalt(10);
            updateData.password = await bcrypt.hash(password, salt);
        }
        const user = await superAdminToBeEdited(loggedUser, updateData);
        if(user.status == false){
            throw new Error(user.message);
        }
        res.status(200).json({ status: true, message: user.message });
    } catch (error) {
        next(error);
    }
};
const logout = async (req, res, next) => {
    try {
        res.clearCookie('adminaccessToken', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
        });
        res.clearCookie('adminrefreshToken', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
        });
        res.status(200).json({ status: true, message: 'Logged out successfully' });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    register,
    login,
    loggeduser,
    loggeduseredit,
    logout,
};
