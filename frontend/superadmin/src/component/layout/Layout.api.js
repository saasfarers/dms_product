import axios from 'axios';

const fetchLayoutData = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/layout`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Layout data:', error);
        throw error;
    }
};

module.export = {
    fetchLayoutData
}