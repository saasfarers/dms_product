const jwt = require('jsonwebtoken');
const organization = require('../../models/superadminmodels/organization.model')
const { generateAccessToken } = require('../utils/generatedToken');

const protect = async (req, res, next) => {
    try {
        const accessToken = req.cookies.tenentaccessToken;
        if(accessToken){

            const decoded = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET);
            const organization = await organization.findById(decoded.id);
            if (!organization) {
                return res.status(200).json({status: false, message: 'Invalid refresh token, please log in again' });
            }
            req.loggedUser = decoded.id;
            req.loggedOrganization = decoded.database;
            return next();

        }else{
            
            const refreshToken = req.cookies.tenentrefreshToken;
            if (!refreshToken) {
                return res.status(200).json({status: false, message: 'Session expired, please log in again' });
            }
            const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
            const organization = await organization.findById(decoded.id);

            if (!organization) {
                return res.status(200).json({status: false, message: 'Invalid refresh token, please log in again' });
            }

            const newAccessToken = generateAccessToken(organization._id, organization.domain);

            res.cookie('tenentaccessToken', newAccessToken, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: process.env.JWT_ACCESS_SECRET_MAX_AGE,
            });
            req.loggedUser = decoded.id;
            req.loggedOrganization = decoded.database;
            return next();
        }
       
    } catch (error) {
        return res.status(200).json({status: false, message: 'Invalid token, please log in again' });
    }
};

module.exports = {
    protect,
};
