const jwt = require('jsonwebtoken');
const Organizationuser = require('../../models/organizationusers.model')
const { generateAccessToken } = require('../utils/generatedToken');

const protect = async (req, res, next) => {
    try {
        
        const accessToken = req.cookies.tenentaccessToken;
        if(accessToken){
            const decoded = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET);
            
            const tenentUser = await Organizationuser.findOne({_id: decoded.id}).populate('createdBy', 'domain');
            if (!tenentUser) {
                return res.status(200).json({status: false, message: 'Invalid refresh token, please log in again', data: '' });
            }


            req.loggedUser = decoded.id;
            req.loggedDatabase = decoded.database;
            return next();
        }else{
            const refreshToken = req.cookies.tenentrefreshToken;
            if (!refreshToken) {
                return res.status(200).json({status: false, message: 'Session expired, please log in again', data: '' });
            }
            const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

            const tenentUser = await Organizationuser.findOne({_id: decoded.id}).populate('createdBy', 'domain');
            if (!tenentUser) {
                return res.status(200).json({status: false, message: 'Invalid refresh token, please log in again', data: '' });
            }

            const newAccessToken = generateAccessToken(tenentUser._id, tenentUser.createdBy.domain);
            res.cookie('tenentaccessToken', newAccessToken, {
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
