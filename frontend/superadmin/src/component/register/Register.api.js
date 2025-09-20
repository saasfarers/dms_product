import axios from 'axios';

export const fetchRegisterData = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/register`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Register data:', error);
        throw error;
    }
};

export const register= async (pageData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/superadmin/superadminauth/register`,
      pageData,
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
