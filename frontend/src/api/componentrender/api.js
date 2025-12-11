import axios from 'axios';

export const loggedSuperadminCheck = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/authenticate/superadminauthenticate/loggeduser`, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const loggedTenentCheck = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/authenticate/tenentauthenticate/loggeduser`, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};