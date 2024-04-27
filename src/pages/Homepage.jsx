import React from 'react';
import { Link } from 'react-router-dom';
import Chooseus from '../components/Chooseus';

const Homepage = () => {
  return (
    <div className="bg-cover bg-center h-screen relative" style={{ 
      backgroundImage: "url('/Tajmahal.jpg')",
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      backgroundBlendMode: "overlay",
      backgroundSize: "cover",
    }}>
      {/* Header Section */}
      <header className="bg-opacity-75 text-white py-4 px-6 flex items-center justify-between w-full absolute top-0">
        <div className="flex items-center justify-between w-full">
          <img src="/logo.png" alt="TripPey Logo" className="h-11 mr-2" />
          <nav>
            <ul className="flex space-x-4 font-bold">
              <li><Link to="/" className="nav-link text-white font-bold hover:text-red-500">Home</Link></li>
              <li><Link to="/services" className="nav-link text-white font-bold hover:text-red-500">Services</Link></li>
              <li><Link to="/about" className="nav-link text-white font-bold hover:text-red-500">About Us</Link></li>
              <li><Link to="/contact" className="nav-link text-white font-bold hover:text-red-500">Contact Us</Link></li>
              <li><Link to="/faq" className="nav-link text-white font-bold hover:text-red-500">FAQ</Link></li>
              <li><Link to="/gallery" className="nav-link text-white font-bold hover:text-red-500">Gallery</Link></li>
              <li><Link to="/reviews" className="nav-link text-white font-bold hover:text-red-500">Reviews</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content Section */}
      <div className="h-screen flex flex-col justify-center items-center text-center text-white relative z-10">
        <h1 className="text-9xl font-custom font-bold mb-4">TripPey</h1>
        <p className="text-lg font-bold font-custom1 text-4xl mb-8">Dive into the world with us - 'ease', 'explore', 'spend' and 'earn'</p>
        <p className="max-w-3xl mx-auto mb-8 font-custom2">
          TripPey revolutionizes the travel experience by seamlessly blending convenience, cultural immersion, and personalized exploration.
          Our website empowers travelers to delve into local cultures while effortlessly accessing essential services.
        </p>
        <p className="mt-12">
          <Link to="/signup" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Sign Up</Link>
        </p>
        <p className="mt-4">
          Already a user? <Link to="/login" className="text-blue-300 hover:underline">Log In</Link>
        </p>
          
     
      </div>

      <Chooseus /> 

      
    </div>
  );
};

export default Homepage;
