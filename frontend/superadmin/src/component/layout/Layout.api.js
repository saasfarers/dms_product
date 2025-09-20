import axios from 'axios';

export const fetchLayoutData = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/layout`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Layout data:', error);
        throw error;
    }
};

export const loggeduser = async () => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/superadmin/superadminauth/loggeduser`,
      {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true,
      }
    );
    return response?.data;
    
  } catch (error) {
    return error
  }
};