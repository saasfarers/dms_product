import axios from 'axios';

export const tenentCheck = async (hostname) => {
    try {
        const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/authenticate/tenentcheck/tenentcheck`, {tenentName: hostname});
        return {status: data.status, message: data.message, data: data.data};
    } catch (error) {
        console.error('Error fetching data:', error);
        return {status: false, message: error.message, data: ""};
    }
};
