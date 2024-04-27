import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url('/beach.jpg')` }}>
      {/* Header Section */}
      <div className="flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-12 w-30 mr-2" /> {/* Adjust height and width as needed */}

        </div>
        {/* Navigation Links and Profile */}
        <div className="flex items-center space-x-20">
          <Link to="/" className="text-black font-bold hover:text-blue-500">Home</Link>
          <Link to="/bookings" className="text-black font-bold hover:text-blue-500">Bookings</Link>
          <Link to="/rewards" className="text-black font-bold hover:text-blue-500">Rewards</Link>
          <Link to="/notifications" className="text-black font-bold hover:text-blue-500">Notifications</Link>
          <Link to="/settings" className="text-black font-bold hover:text-blue-500">Settings</Link>
          <Link to="/profile" className="block relative">
            <img src="/profilephoto.jpg" alt="Profile" className="h-10 w-10 rounded-full ring-2 ring-blue-500 hover:ring-4" />
          </Link>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-blue-100 bg-opacity-80 p-8 rounded-lg max-w-md mx-auto mt-20">
        <form>
          <div className="mb-4">
            <label htmlFor="from" className="block  text-sm font-medium text-gray-700">From</label>
            <input type="text" id="from" name="from" className="border border-gray-300 rounded-md p-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="to" className="block text-sm font-medium text-gray-700">To</label>
            <input type="text" id="to" name="to" className="border border-gray-300 rounded-md p-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="travelers" className="block text-sm font-medium text-gray-700">Number of Travellers</label>
            <input type="number" id="travelers" name="travelers" className="border border-gray-300 rounded-md p-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="departure" className="block text-sm font-medium text-gray-700">Departure Date</label>
            <input type="date" id="departure" name="departure" className="border border-gray-300 rounded-md p-2 w-full" />
          </div>
          <div className="mb-4">
            <label htmlFor="transport" className="block text-sm font-medium text-gray-700">Travel Transport</label>
            <select id="transport" name="transport" className="border border-gray-300 rounded-md p-2 w-full">
              <option value="flight">Flight</option>
              <option value="bus">Bus</option>
              <option value="train">Train</option>
            </select>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md flex justify-center items-center w-full">
            Plan Your Trip
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
