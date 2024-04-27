import React from 'react';

const RestaurantBooking = () => {
  // Dummy data for demonstration
  const reservations = [
    { id: 1, restaurantName: 'Example Restaurant', reservationDate: '2024-05-03', reservationTime: '7:00 PM', partySize: 2 },
    // Add more reservations as needed
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-semibold mb-4">Restaurant Reservations</h2>
      {reservations.map((reservation) => (
        <div key={reservation.id} className="border-b border-gray-300 pb-4 mb-4">
          <p className="text-lg font-medium">{reservation.restaurantName}</p>
          <p className="text-gray-600">Date: {reservation.reservationDate}</p>
          <p className="text-gray-600">Time: {reservation.reservationTime}</p>
          <p className="text-gray-600">Party Size: {reservation.partySize}</p>
          <button className="text-blue-500 hover:underline mt-2">Modify / Cancel</button>
        </div>
      ))}
      <button className="text-blue-500 hover:underline">Search & Reserve Restaurants</button>
    </div>
  );
};

export default RestaurantBooking;
