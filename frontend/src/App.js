import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppProvider from './contextState/AppProvider';
import ProtectedRoute from "./components/protectedroute";

import Baselayout from './pages/baselayout/BaseLayout';
import Componentrender from './pages/componentrender/Componentrender';
import Mainpage from './pages/mainpage/Mainpage';
import Maindashboard from './pages/maindashboard/Maindashboard';
import Mainplatformmanagement from './pages/mainplatformmanagement/Mainplatformmanagement';
import Mainsetting from './pages/mainsetting/Mainsetting';
import Dashboard from './pages/dashboard/Dashboard';
import Events from './pages/events/Events';
import Donations from './pages/donations/Donations';
import FinancialManagement from './pages/financialmanagement/FinancialManagement';
import Procurement from './pages/procurement/Procurement';
import FamilyAssistance from './pages/familyassistance/FamilyAssistance';
import Volunteers from './pages/volunteers/Volunteers';
import Madrasah from './pages/madrasah/Madrasah';
import Facilities from './pages/facilities/Facilities';
import HajjManagement from './pages/hajjmanagement/HajjManagement';
import StaffManagement from './pages/staffmanagement/StaffManagement';
import Analytics from './pages/analytics/Analytics';
import AIassistant from './pages/aiassistant/AIassistant';
import Settings from './pages/settings/Settings';
import Sermons from './pages/sermons/Sermons';
import BookFacilities from './pages/bookfacilities/BookFacilities';
import FindPlace from './pages/findplace/FindPlace';
import MyProgress from './pages/myprogress/MyProgress';


import Dummytemplate from './pages/dummytemplate/Dummytemplate';
import DesignCheck from './pages/designcheck/DesignCheck';


function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Baselayout />}>

            <Route index element={<Mainpage />} />

            <Route path="/" element={<Componentrender />}>

              {/* Superadmin */}
              <Route path="maindashboard" element={<ProtectedRoute allowedSlug="maindashboard" element={<Maindashboard />} />} ></Route>
              <Route path="mainplatformmanagement" element={<ProtectedRoute allowedSlug="mainplatformmanagement" element={<Mainplatformmanagement />} />} ></Route>
              <Route path="mainsetting" element={<ProtectedRoute allowedSlug="mainsetting" element={<Mainsetting />} />} ></Route>

              {/* Others */}
              <Route path="dashboard" element={<ProtectedRoute allowedSlug="dashboard" element={<Dashboard />} />} ></Route>
              <Route path="events" element={<ProtectedRoute allowedSlug="events" element={<Events />} />} ></Route>
              <Route path="donations" element={<ProtectedRoute allowedSlug="donations" element={<Donations />} />} ></Route>
              <Route path="financialmanagement" element={<ProtectedRoute allowedSlug="financialmanagement" element={<FinancialManagement />} />} ></Route>
              <Route path="procurement" element={<ProtectedRoute allowedSlug="procurement" element={<Procurement />} />} ></Route>
              <Route path="familyassistance" element={<ProtectedRoute allowedSlug="familyassistance" element={<FamilyAssistance />} />} ></Route>
              <Route path="volunteers" element={<ProtectedRoute allowedSlug="volunteers" element={<Volunteers />} />} ></Route>
              <Route path="education" element={<ProtectedRoute allowedSlug="education" element={<Madrasah />} />} ></Route>
              <Route path="facilities" element={<ProtectedRoute allowedSlug="facilities" element={<Facilities />} />} ></Route>
              <Route path="platformmanagement" element={<ProtectedRoute allowedSlug="platformmanagement" element={<HajjManagement />} />} ></Route>
              <Route path="staffmanagement" element={<ProtectedRoute allowedSlug="staffmanagement" element={<StaffManagement />} />} ></Route>
              <Route path="analytics" element={<ProtectedRoute allowedSlug="analytics" element={<Analytics />} />} ></Route>
              <Route path="aiassistant" element={<ProtectedRoute allowedSlug="aiassistant" element={<AIassistant />} />} ></Route>
              <Route path="settings" element={<ProtectedRoute allowedSlug="settings" element={<Settings />} />} ></Route>
              <Route path="sermons" element={<ProtectedRoute allowedSlug="sermons" element={<Sermons />} />} ></Route>
              <Route path="bookfacilities" element={<ProtectedRoute allowedSlug="bookfacilities" element={<BookFacilities />} />} ></Route>
              <Route path="findplace" element={<ProtectedRoute allowedSlug="findplace" element={<FindPlace />} />} ></Route>
              <Route path="myprogress" element={<ProtectedRoute allowedSlug="myprogress" element={<MyProgress />} />} ></Route>

              {/* Dummy Test */}
              <Route path="dummytemplate" element={<ProtectedRoute allowedSlug="dummytemplate" element={<Dummytemplate />} />} ></Route>
              <Route path="designcheck" element={<ProtectedRoute allowedSlug="designcheck" element={<DesignCheck />} />} ></Route>

            </Route>

            <Route path="*" element={<h1>404 Not Found</h1>} />

          </Route>

        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}


export default App;
