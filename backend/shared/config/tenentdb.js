const mongoose = require("mongoose");
const connections = {};

const tenentDbConnect = async (domain="") => {
    try {
        if (connections[domain]) {
            return { status: true, message: 'DB Connection Exsist.', data: connections[domain] };
        }
        const newConnection = await mongoose.createConnection(`${process.env.TENENT_MONGO_URI}/${domain}`);
        connections[domain] = newConnection;
        return {status: true, message: 'DB Connected.', data: newConnection};
    } catch (error) {
        return {status: false, message: error, data: ''};
    }
}

const tenentDbClosed = async (domain="") => {
    try {
        await connections[domain].close();
        delete connections[domain];
        return {status: true, message: 'DB Closed.', data: connections[domain]};
    } catch (error) {
        return {status: false, message: error, data: ''};
    }
}


module.exports = {
    tenentDbConnect,
    tenentDbClosed
};