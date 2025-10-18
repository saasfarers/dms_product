const { 
    superAdminToBeRegister,
    superAdminToBeLogin
} = require('../helpers/superadmin.helper');
const { 
    generateAccessToken, 
    generateRefreshToken 
} = require('../../../shared/utils/generatedToken');



const register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const user = await superAdminToBeRegister(name, email, password);
        if(user.status == false){
            return res.status(200).json({ status: user.status, message: user.message, data: user.data });
        }
        return res.status(200).json({ status: true, message: 'User Register Successfully.', data: user.data });
    } catch (error) {
        next(error);
    }
};
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const database = 'superadmin';
        const user = await superAdminToBeLogin(email, password);
        if(user.status == false){
            return res.status(200).json({ status: user.status, message: user.message, data: user.data });
        }
        const accessToken = generateAccessToken(user.data._id, database);
        const refreshToken = generateRefreshToken(user.data._id, database);

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

        res.status(200).json({ status: true, message: 'User Logged Successfully.', data: user.data});
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
        res.status(200).json({ status: true, message: 'Logged out successfully', data: '' });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    register,
    login,
    logout
};