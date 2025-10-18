const { 
    tenentNameTobeCheck,
    tenentTobeLogin
} = require('../helpers/tenent.helper');
const { 
    generateAccessToken, 
    generateRefreshToken 
} = require('../../../shared/utils/generatedToken');
const { 
    tenentDbConnect,
    tenentDbClosed
} = require('../../../shared/config/tenentdb');

const tenentcheck = async (req, res, next) => {
    try {
        const { tenentName } = req.body;
        const tenent = await tenentNameTobeCheck(tenentName);
        if(tenent.status == false){
            return res.status(200).json({ status: tenent.status, message: tenent.message, data: tenent.data });
        }
        res.status(200).json({ status: true, message: "Tenent Fetched Successfully.", data: tenent.data });
    } catch (error) {
        next(error);
    }
}
const login = async (req, res, next) => {
    try {
        const { userName, password } = req.body;
        
        const tenent = await tenentTobeLogin(userName, password);
        if(tenent.status == false){
            return res.status(200).json({ status: tenent.status, message: tenent.message, data: tenent.data });
        }
       
        const tenentDb = await tenentDbConnect(tenent.data.domain);
        if(tenentDb.status == false){
            return res.status(200).json({ status: tenentDb.status, message: tenentDb.message, data: tenentDb.data });
        }

        const accessToken = generateAccessToken(tenent.data._id, tenent.data.domain);
        const refreshToken = generateRefreshToken(tenent.data._id, tenent.data.domain);
        res.cookie('tenentaccessToken', accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: parseInt(process.env.JWT_ACCESS_SECRET_MAX_AGE, 10),
        });
        res.cookie('tenentrefreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: parseInt(process.env.JWT_REFRESH_SECRET_MAX_AGE, 10),
        });

        res.status(200).json({ status: true, message: "User Logged Successfully.", data: tenent.data });
    } catch (error) {
        next(error);
    }
};
const logout = async (req, res, next) => {
    try {
        const { loggedUser, loggedDatabase } = req;
        res.clearCookie('tenentaccessToken', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
        });
        res.clearCookie('tenentrefreshToken', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
        });
        await tenentDbClosed(loggedDatabase);
        res.status(200).json({ status: true, message: 'Logged out successfully', data: '' });
    } catch (error) {
        next(error);
    }
};


module.exports = {
    login,
    tenentcheck,
    logout
};