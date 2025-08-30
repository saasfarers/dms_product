const jwt = require('jsonwebtoken');
const User = require('../../models/superadminmodels/superadmin.model');
const { generateAccessToken } = require('../utils/generatedToken');

const protect = async (req, res, next) => {
    try {
        const accessToken = req.cookies.accessToken;
        if(accessToken){

            const decoded = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET);
            const user = await User.findById(decoded.id);
            if (!user) {
                return res.status(403).json({ message: 'Invalid refresh token, please log in again' });
            }
            req.loggedUser = decoded.id;
            return next();

        }else{
            
            const refreshToken = req.cookies.refreshToken;
            if (!refreshToken) {
                return res.status(401).json({ message: 'Session expired, please log in again' });
            }
            const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
            const user = await User.findById(decoded.id);

            if (!user) {
                return res.status(403).json({ message: 'Invalid refresh token, please log in again' });
            }

            const newAccessToken = generateAccessToken(user._id);

            res.cookie('accessToken', newAccessToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: process.env.JWT_ACCESS_SECRET_MAX_AGE,
            });
            req.loggedUser = decoded.id;
            return next();
        }
       
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token, please log in again' });
    }
};

module.exports = {
    protect,
};
