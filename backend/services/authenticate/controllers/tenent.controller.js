const { 
    tenentTobeLogin,
    tenentToBeLoggedin,
    tenentToBeEdited
} = require('../helpers/tenent.helper');
const { 
    generateAccessToken, 
    generateRefreshToken 
} = require('../../../shared/utils/generatedToken');
const { 
    tenentDbConnect,
    tenentDbClosed
} = require('../../../shared/config/tenentdb');


const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        
        const tenent = await tenentTobeLogin(email, password);
        if(tenent.status == false){
            return res.status(200).json({ status: tenent.status, message: tenent.message, data: tenent.data });
        }
       
        const tenentDb = await tenentDbConnect(tenent.data.createdBy.domain);
        if(tenentDb.status == false){
            return res.status(200).json({ status: tenentDb.status, message: tenentDb.message, data: tenentDb.data });
        }

        const accessToken = generateAccessToken(tenent.data._id, tenent.data.createdBy.domain);
        const refreshToken = generateRefreshToken(tenent.data._id, tenent.data.createdBy.domain);
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

        return res.status(200).json({ status: tenent.status, message: tenent.message, data: tenent.data });
    } catch (error) {
        next(error);
    }
};
const loggeduser = async (req, res, next) => {
    try {
        const { loggedUser, loggedDatabase } = req;
        const user = await tenentToBeLoggedin(loggedUser);
        if(user.status == false){
            return res.status(200).json({ status: user.status, message: user.message, data: user.data });
        }
        return res.status(200).json({ status: user.status, message: user.message, data: user.data });
    } catch (error) {
        next(error);
    }
};
const loggeduseredit = async (req, res, next) => {
    try {
        const { loggedUser, loggedDatabase } = req;
        const {
            name,
            email,
            password,
            role,
            language,
            isActive
        } = req.body;

        const updateData = {};
        if (name) updateData.name = name;
        if (email) updateData.email = email;
        if (role) updateData.role = role;
        if (language) updateData.language = language;
        if (typeof isActive !== "undefined") updateData.isActive = isActive;

        if (password) {
            const salt = await bcrypt.genSalt(10);
            updateData.password = await bcrypt.hash(password, salt);
        }
        const user = await tenentToBeEdited(loggedUser, updateData);
        if(user.status == false){
            return res.status(200).json({ status: user.status, message: user.message, data: user.data });
        }
        return res.status(200).json({ status: user.status, message: user.message, data: user.data });
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
        return res.status(200).json({ status: true, message: 'Logged out successfully', data: '' });
    } catch (error) {
        next(error);
    }
};


module.exports = {
    login,
    loggeduser,
    loggeduseredit,
    logout
};