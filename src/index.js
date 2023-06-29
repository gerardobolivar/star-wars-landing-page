import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./pages/Home";
import Login from "./pages/login";
import reportWebVitals from './reportWebVitals';
import PasswordRecovery from './pages/PasswordRecovery';
import './index.css';


import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
  { 
    path: "/",
   element: <Home /> 
  },
  { 
    path: "/login",
   element: <Login/> 
  },
  {
    path: "/recovery",
    element: <PasswordRecovery/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
