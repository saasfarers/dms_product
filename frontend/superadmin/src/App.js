import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppProvider from './contextState/AppProvider';
import routeConfig from './routes.json';
import Layout from './component/layout/Layout'
import Register from './component/register/Register'



const componentsMap = {
  Layout,
  Register
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
