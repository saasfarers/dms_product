const jwt = require('jsonwebtoken');

const generateAccessToken = (userId="" , database="") => {
    return jwt.sign({ id: userId, database: database }, process.env.JWT_ACCESS_SECRET, { expiresIn: process.env.JWT_ACCESS_SECRET_EXP });
};

const generateRefreshToken = (userId="" , database="") => {
    return jwt.sign({ id: userId, database: database }, process.env.JWT_REFRESH_SECRET, { expiresIn: process.env.JWT_REFRESH_SECRET_EXP });
};





module.exports = { 
    generateAccessToken, 
    generateRefreshToken
};