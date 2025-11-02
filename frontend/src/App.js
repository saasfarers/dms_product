import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppProvider from './contextState/AppProvider';
import routeConfig from './routes.json';
import Baselayout from './pages/baselayout/Baselayout';
import Mainpage from './pages/mainpage/Mainpage';


const componentsMap = {
  Baselayout,
  Mainpage
};


const generateRoutes = (routes) => {
  return routes.map(({ path, element, children }, index) => (
    <Route key={index} path={path} element={React.createElement(componentsMap[element])} >
      {children && generateRoutes(children)}
    </Route>
  ));
}


function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>{generateRoutes(routeConfig)}</Routes>
      </BrowserRouter>
    </AppProvider>
  );
}


export default App;
