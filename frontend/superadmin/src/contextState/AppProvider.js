import React, { useState } from 'react';
import AppContext from './AppContext';

const AppProvider = ({ children }) => {
  const [user, setUser] = useState({userId: "", userName: "", email: "", role: ""});
  const [language, setLanguage] = useState('en');

  return (
    <AppContext.Provider value={{ user, setUser, language, setLanguage }} >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;