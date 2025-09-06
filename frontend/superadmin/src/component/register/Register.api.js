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

export const handleLoggedUser = async (navigate, setSnackbar) => {
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
    if(response?.data?.status == true){
        navigate('/login')
    }else{
        
    }
    
  } catch (error) {
    setSnackbar((prev) => ({
        ...prev,
        open : true,
        message : error,
        severity : "error"
    }));
  }
};

export const handleRegister= async (pageData, setPageData, navigate, setSnackbar) => {
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
    if(response?.data?.status == true){
        setPageData((prev) => ({
            ...prev,
            name : "",
            email : "",
            password : ""
        }));
        setSnackbar((prev) => ({
            ...prev,
            open : true,
            message : "Register Successfully.",
            severity : "success"
        }));
        navigate('/login')
    }else{
        setSnackbar((prev) => ({
            ...prev,
            open : true,
            message : response?.data?.message,
            severity : "error"
        }));
    }
    
  } catch (error) {
    setSnackbar((prev) => ({
        ...prev,
        open : true,
        message : error,
        severity : "error"
    }));
  }
};
