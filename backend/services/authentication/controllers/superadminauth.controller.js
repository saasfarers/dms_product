const { userToBeRegister, userToBeLogin, userToBeLoggedin } = require('../helpers/superadminauth.helper');
const { generateAccessToken, generateRefreshToken } = require('../../../shared/utils/generatedToken');
const jwt = require('jsonwebtoken');


const register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const user = await userToBeRegister(name, email, password);
        if(user.status == false){
            throw new Error(user.message);
        }
        const accessToken = generateAccessToken(user.message._id);
        const refreshToken = generateRefreshToken(user.message._id);

        res.cookie('accessToken', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: parseInt(process.env.JWT_ACCESS_SECRET_MAX_AGE, 10),
        });
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: parseInt(process.env.JWT_REFRESH_SECRET_MAX_AGE, 10),
        });

        return res.status(200).json({
            user,
            accessToken,
            refreshToken
        });
    } catch (error) {
        next(error);
    }
};
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await userToBeLogin(email, password);
        if(user.status == false){
            throw new Error(user.message);
        }
        const accessToken = generateAccessToken(user.message._id);
        const refreshToken = generateRefreshToken(user.message._id);

        res.cookie('accessToken', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: parseInt(process.env.JWT_ACCESS_SECRET_MAX_AGE, 10),
        });
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: parseInt(process.env.JWT_REFRESH_SECRET_MAX_AGE, 10),
        });

        res.status(200).json({
            user,
            accessToken,
            refreshToken
        });
    } catch (error) {
        next(error);
    }
};
const loggeduser = async (req, res, next) => {
    try {
        const loggedUser = req.loggedUser;
        const user = await userToBeLoggedin(loggedUser);
        if(user.status == false){
            throw new Error(user.message);
        }
        res.status(200).json({ user });
    } catch (error) {
        next(error);
    }
};
const logout = async (req, res, next) => {
    try {
        res.clearCookie('accessToken', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
        });
        res.clearCookie('refreshToken', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
        });
        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    register,
    login,
    loggeduser,
    logout,
};
