import React from 'react';

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-gray-300 py-8 px-6">
        <div className="flex items-center justify-start mb-4">
          <span className="mr-2">🏠</span>
          <p className="text-sm">Rohini, Delhi, India</p>
        </div>
        <div className="flex items-center justify-start mb-4">
          <span className="mr-2">📞</span>
          <p className="text-sm">+91 55555 44444</p>
        </div>
        <div className="flex items-center justify-start mb-4">
          <span className="mr-2">✉️</span>
          <p className="text-sm">support@rakshak.com</p>
        </div>
        <div className="flex flex-col items-start justify-start md:items-end md:text-right">
          <p className="font-bold mb-2">About the Company</p>
          <p className="text-sm mb-4">
            Automated defense inventory management with advanced technology, including a CNN model using satellite imagery for real-time security, and a Unified Dashboard for seamless collaboration.
          </p>
          <div className="flex items-center space-x-4">
            <span role="img" aria-label="Facebook">📘</span>
            <span role="img" aria-label="Twitter">🐦</span>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  