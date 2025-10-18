const jwt = require('jsonwebtoken');
const User = require('../../models/superadminmodels/superadmin.model');
const { generateAccessToken } = require('../utils/generatedToken');

const protect = async (req, res, next) => {
    try {
        const accessToken = req.cookies.adminaccessToken;
        if(accessToken){
            const decoded = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET);
            const superadminUser = await User.findById(decoded.id);
            if (!superadminUser) {
                return res.status(200).json({status: false, message: 'Invalid refresh token, please log in again', data: '' });
            }

            req.loggedUser = decoded.id;
            req.loggedDatabase = decoded.database;
            return next();
        }else{
            const refreshToken = req.cookies.adminrefreshToken;
            if (!refreshToken) {
                return res.status(200).json({status: false, message: 'Session expired, please log in again', data: '' });
            }
            const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

            const superadminUser = await User.findById(decoded.id);
            if (!superadminUser) {
                return res.status(200).json({status: false, message: 'User Not Found.', data: '' });
            }

            const newAccessToken = generateAccessToken(superadminUser._id);
            res.cookie('adminaccessToken', newAccessToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: process.env.JWT_ACCESS_SECRET_MAX_AGE,
            });
            
            req.loggedUser = decoded.id;
            req.loggedDatabase = decoded.database;
            return next();
        }
       
    } catch (error) {
        return res.status(200).json({status: false, message: error, data: '' });
    }
};

module.exports = {
    protect,
};
