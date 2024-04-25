import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from react-dom
import './index.css';
import App from './App';

// Use createRoot to render your application
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
