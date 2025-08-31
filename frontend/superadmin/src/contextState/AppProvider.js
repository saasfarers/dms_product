import React, { useState } from 'react';
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import AppContext from './AppContext';

const AppProvider = ({ children }) => {
  const theme = createTheme();
  const [user, setUser] = useState({userId: "", userName: "", email: "", role: ""});
  const [language, setLanguage] = useState('en');

  return (
    <AppContext.Provider value={{ user, setUser, language, setLanguage }} >
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default AppProvider;