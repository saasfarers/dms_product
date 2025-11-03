import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppProvider from './contextState/AppProvider';
import ProtectedRoute from "./components/protectedroute";

import Baselayout from './pages/baselayout/Baselayout';
import Mainpage from './pages/mainpage/Mainpage';


function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Baselayout />}>

            <Route index element={<Mainpage />} />

            <Route path="maindashboard" element={<ProtectedRoute allowedSlug="maindashboard" element={''} />} />
            <Route path="mainplatformmanagement" element={<ProtectedRoute allowedSlug="mainplatformmanagement" element={''} />} />
            <Route path="mainsetting" element={<ProtectedRoute allowedSlug="mainsetting" element={''} />} />

            <Route path="*" element={<h1>404 Not Found</h1>} />

          </Route>

        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}


export default App;
