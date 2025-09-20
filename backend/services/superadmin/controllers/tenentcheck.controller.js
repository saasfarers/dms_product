const { tenentNameTobeCheck, tenentTobeLogin } = require('../helpers/tenentcheck.helper')

const tenent = async (req, res, next) => {
    try {
        const { tenentName } = req.query;
        const tenentNameCheck = await tenentNameTobeCheck(tenentName);
        if(tenentNameCheck.status == false){
            throw new Error(tenentNameCheck.message);
        }
        res.status(200).json({ status: true, message: tenentNameCheck.message });
    } catch (error) {
        next(error);
    }
};

const tenentlogin = async (req, res, next) => {
    try {
        const { userName, password } = req.body;
        const tenent = await tenentTobeLogin(userName, password);
        if(tenent.status == false){
            throw new Error(tenent.message);
        }
        res.status(200).json({ status: true, message: tenent.message });
    } catch (error) {
        next(error);
    }
};


module.exports = {
   tenent,
   tenentlogin
};