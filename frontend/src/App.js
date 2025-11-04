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

            {/* Superadmin */}
            <Route path="maindashboard" element={<ProtectedRoute allowedSlug="maindashboard" element={''} />} ></Route>
            <Route path="mainplatformmanagement" element={<ProtectedRoute allowedSlug="mainplatformmanagement" element={''} />} ></Route>
            <Route path="mainsetting" element={<ProtectedRoute allowedSlug="mainsetting" element={''} />} ></Route>

            {/* Others */}
            <Route path="dashboard" element={<ProtectedRoute allowedSlug="dashboard" element={''} />} ></Route>
            <Route path="events" element={<ProtectedRoute allowedSlug="events" element={''} />} ></Route>
            <Route path="donations" element={<ProtectedRoute allowedSlug="donations" element={''} />} ></Route>
            <Route path="financialmanagement" element={<ProtectedRoute allowedSlug="financialmanagement" element={''} />} ></Route>
            <Route path="procurement" element={<ProtectedRoute allowedSlug="procurement" element={''} />} ></Route>
            <Route path="familyassistance" element={<ProtectedRoute allowedSlug="familyassistance" element={''} />} ></Route>
            <Route path="volunteers" element={<ProtectedRoute allowedSlug="volunteers" element={''} />} ></Route>
            <Route path="madrasah" element={<ProtectedRoute allowedSlug="madrasah" element={''} />} ></Route>
            <Route path="facilities" element={<ProtectedRoute allowedSlug="facilities" element={''} />} ></Route>
            <Route path="hajjmanagement" element={<ProtectedRoute allowedSlug="hajjmanagement" element={''} />} ></Route>
            <Route path="staffmanagement" element={<ProtectedRoute allowedSlug="staffmanagement" element={''} />} ></Route>
            <Route path="analytics" element={<ProtectedRoute allowedSlug="analytics" element={''} />} ></Route>
            <Route path="aiassistant" element={<ProtectedRoute allowedSlug="aiassistant" element={''} />} ></Route>
            <Route path="settings" element={<ProtectedRoute allowedSlug="settings" element={''} />} ></Route>
            <Route path="sermons" element={<ProtectedRoute allowedSlug="sermons" element={''} />} ></Route>
            <Route path="bookfacilities" element={<ProtectedRoute allowedSlug="bookfacilities" element={''} />} ></Route>
            <Route path="findplace" element={<ProtectedRoute allowedSlug="findplace" element={''} />} ></Route>
            <Route path="myprogress" element={<ProtectedRoute allowedSlug="myprogress" element={''} />} ></Route>


            <Route path="*" element={<h1>404 Not Found</h1>} />

          </Route>

        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}


export default App;
