import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Chooseus from './components/Chooseus';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define routes for each page/component */}
        <Route path="/" element={<Homepage />} />
        <Route path="/chooseus" element={<Chooseus />} />
        <Route path="/signup" element={<Signup />} /> {/* Route for Sign Up page */}
        <Route path="/login" element={<Login/>} /> {/* Route for Login page */}
        {/* <Route path="/signin" element={<Dashboard />} /> */}
        <Route path="/signin" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Route for Dashboard page */}
        

        
        {/* Add more routes for additional pages/components */}
      </Routes>
    </Router>
  );
};

export default App;

