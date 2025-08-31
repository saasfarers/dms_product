import axios from 'axios';

const fetchRegisterData = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/register`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Register data:', error);
        throw error;
    }
};

module.export = {
    fetchRegisterData
}