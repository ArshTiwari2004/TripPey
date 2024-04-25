import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Chooseus from './components/Chooseus';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define routes for each page/component */}
        <Route path="/" element={<Homepage />} />
        <Route path="/chooseus" element={<Chooseus />} />
        {/* Add more routes for additional pages/components */}
      </Routes>
    </Router>
  );
};

export default App;
