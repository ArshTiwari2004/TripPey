import React from 'react';

const HotelBooking = () => {
  // Dummy data for demonstration
  const bookings = [
    { id: 1, hotelName: 'Example Hotel', checkInDate: '2024-05-01', checkOutDate: '2024-05-05', roomType: 'Deluxe', price: '$200/night' },
    // Add more bookings as needed
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-semibold mb-4">Hotel Reservations</h2>
      {bookings.map((booking) => (
        <div key={booking.id} className="border-b border-gray-300 pb-4 mb-4">
          <p className="text-lg font-medium">{booking.hotelName}</p>
          <p className="text-gray-600">Check-in: {booking.checkInDate} | Check-out: {booking.checkOutDate}</p>
          <p className="text-gray-600">Room Type: {booking.roomType}</p>
          <p className="text-gray-600">Price: {booking.price}</p>
          <button className="text-blue-500 hover:underline mt-2">Manage Booking</button>
        </div>
      ))}
      <button className="text-blue-500 hover:underline">Search & Book Hotels</button>
    </div>
  );
};

export default HotelBooking;
