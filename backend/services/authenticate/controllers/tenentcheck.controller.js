const { 
    tenentNameTobeCheck,
} = require('../helpers/tenentcheck.helper');

const tenentcheck = async (req, res, next) => {
    try {
        const { tenentName } = req.body;
        const tenent = await tenentNameTobeCheck(tenentName);
        if(tenent.status == false){
            return res.status(200).json({ status: tenent.status, message: tenent.message, data: tenent.data });
        }
        return res.status(200).json({ status: tenent.status, message: tenent.message, data: tenent.data });
    } catch (error) {
        next(error);
    }
}


module.exports = {
    tenentcheck,
};