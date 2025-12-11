import axios from 'axios';

export const superadminlogout = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/authenticate/superadminauthenticate/logout`, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export const tenentlogout = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/authenticate/tenentauthenticate/logout`, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};