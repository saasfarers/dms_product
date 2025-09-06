import React, { useState } from 'react';
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import { Snackbar, Alert } from "@mui/material";
import AppContext from './AppContext';

const AppProvider = ({ children }) => {
  const theme = createTheme();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({userId: "", userName: "", email: "", role: ""});
  const [language, setLanguage] = useState('en');
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "info", // "success" | "error" | "warning" | "info"
  });

  return (
    <AppContext.Provider value={{ loading, setLoading, user, setUser, language, setLanguage, snackbar, setSnackbar }} >
      <ThemeProvider theme={theme}>
        {children}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={5000}
          onClose={() => setSnackbar(prev => ({ ...prev, open: false, message: "", severity: "info" }))}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert onClose={() => setSnackbar(prev => ({ ...prev, open: false, message: "", severity: "info" }))} severity={snackbar.severity} sx={{ width: "100%" }}>
            {snackbar.message}
          </Alert>
        </Snackbar>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default AppProvider;