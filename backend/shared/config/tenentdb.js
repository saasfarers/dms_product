const mongoose = require("mongoose");
const axios = require("axios");
const connections = {};

const tenentTobeLogin = async (userName="", password="") => {
    try {
        const { data } = await axios.post(`${process.env.BASE_URL}:${process.env.GATEWAY_PORT}/superadmin/tenentcheck/tenentlogin`, { userName, password } );
        if (data.status == false) {
            return {status: false, message: data.message};
        }
        return {status: true, message: data.message};
    } catch (error) {
        return {status: false, message: error};
    }
}

const tenentDbConnect = async (domain="") => {
    try {
        if (connections[domain]) {
            console.log(`Closing old connection for ${domain}`);
            await connections[domain].close();
            delete connections[domain];
        }
        console.log(`Creating new connection for ${domain}`);
        const newConnection = await mongoose.createConnection(`${process.env.TENENT_MONGO_URI}/${domain}`);
        connections[domain] = newConnection;

        return {status: true, message: newConnection};
    } catch (error) {
        return {status: false, message: error};
    }
}


module.exports = {
    tenentTobeLogin,
    tenentDbConnect
};