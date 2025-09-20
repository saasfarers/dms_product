import axios from 'axios';

export const fetchLoginData = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/login`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Login data:', error);
        throw error;
    }
};

export const login= async (pageData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/superadmin/superadminauth/login`,
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