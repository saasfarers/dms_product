import axios from 'axios';

export const fetchDashboardData = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/dashboard`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Dashboard data:', error);
        throw error;
    }
};
