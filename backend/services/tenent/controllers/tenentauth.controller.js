const { tenentTobeLogin, tenentDbConnect } = require('../../../shared/config/tenentdb');
const { generateAccessToken, generateRefreshToken } = require('../../../shared/utils/generatedToken')

const login = async (req, res, next) => {
    try {
        const { userName, password } = req.body;
        const tenent = await tenentTobeLogin(userName, password);
        if(tenent.status == false){
            throw new Error(tenent.message);
        }
        
        const tenentDb = await tenentDbConnect(tenent.message.domain);
        if(tenentDb.status == false){
            throw new Error("DB Not Connected!");
        }

        const accessToken = generateAccessToken(tenent.message._id, tenent.message.domain);
        const refreshToken = generateRefreshToken(tenent.message._id, tenent.message.domain);
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

        res.status(200).json({ status: true, message: tenent.message.domain });
    } catch (error) {
        next(error);
    }
};


module.exports = {
    login
};