const User = require('../models/superadmin.model');
const { generateAccessToken, generateRefreshToken } = require('../../../shared/utils/generatedToken');
const jwt = require('jsonwebtoken');


const sendTokens = async (user, res) => {
    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

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
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        accessToken,
        refreshToken
    });
};

const registerUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const user = await User.create({ name, email, password });
        await sendTokens(user, res);
    } catch (error) {
        next(error);
    }
};

const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({
            email,
            deleted: false,
            isActive: true,
        });
        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        user.lastLogin = new Date();
        await sendTokens(user, res);
    } catch (error) {
        next(error);
    }
};

const getloggeduser = async (req, res, next) => {
    try {
        const user = req.loggedUser;
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        res.status(200).json({ message: 'Get User Successfully', user: user });
    } catch (error) {
        next(error);
    }
};

const logoutUser = async (req, res, next) => {
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
    registerUser,
    loginUser,
    getloggeduser,
    logoutUser,
};
