import axios from 'axios';

export const fetchSidemenuData = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/sidemenu`);
        return response.data;
    } catch (error) {
        console.error('Error fetching Sidemenu data:', error);
        throw error;
    }
};

export const changeLanguage = async (newLanguage) => {
  try {
    const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/authenticate/superadminauthenticate/loggeduseredit`, 
        { language: newLanguage },
        {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true,
        }
    );
    return response.data;
  } catch (error) {
    console.error("Failed to update language:", error.response?.data?.message || error.message);
    throw error;
  }
};

export const logout = async () => {
  try {
    const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/authenticate/superadminauthenticate/logout`, 
        {  },
        {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true,
        }
    );
    return response.data;
  } catch (error) {
    console.error("Failed to update language:", error.response?.data?.message || error.message);
    throw error;
  }
};