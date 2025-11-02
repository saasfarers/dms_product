import axios from 'axios';

export const fetchLoggedlayoutData = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/loggedlayout`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Loggedlayout data:', error);
        throw error;
    }
};