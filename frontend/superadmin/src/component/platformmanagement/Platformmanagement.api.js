import axios from 'axios';

export const fetchPlatformmanagementData = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/platformmanagement`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Platformmanagement data:', error);
        throw error;
    }
};