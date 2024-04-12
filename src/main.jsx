import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
 import "./index.css";
import Layout from "./Layout.jsx";
import Homepage from "./pages/Homepage.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import tailwindConfig from "../tailwind.config.js"; 
 import Login from "./components/Login.jsx";
 import Dashboard from "./components/Dashboard.jsx";
 import Performance from "./components/Performance.jsx";
 import Download from "./components/Download.jsx";
import Geography from "./components/Geography.jsx";
import PathTaken from "./components/Pathtaken.jsx";

 const router = createBrowserRouter([
 {
   path: '/',
   element: <Layout />,
   children: [
    { path: "", element: <Homepage /> }]
   },
     {
      path: "getstarted", // Define a separate route for "/getstarted"
      element: <Login />,
    }, 
    {
      path: "dashboard", // Route for "/dashboard"
      element: <Dashboard />
    },
    {
      path:"performance",
      element:<Performance/>
    },
    {
      path:"download",
      element:<Download/>
    }
    ,
    {
      path:"geography",
      element:<Geography/>
    }
    ,
    {
      path:"pathtaken",
      element:<PathTaken/>
    }

    ]);
 
 ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
 );
