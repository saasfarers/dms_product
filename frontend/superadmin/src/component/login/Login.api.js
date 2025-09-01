import axios from 'axios';

const fetchLoginData = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/login`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Login data:', error);
        throw error;
    }
};

module.export = {
    fetchLoginData
}