import React, { useState } from 'react';

const ActivityBooking = () => {
  const [activities, setActivities] = useState([
    { id: 1, name: 'City Tour', date: '2024-05-04', time: '10:00 AM', location: 'City Center', price: '$50' },
    { id: 2, name: 'Hiking Adventure', date: '2024-05-05', time: '9:00 AM', location: 'Mountain Trails', price: '$80' },
    // Add more activities as needed
  ]);

  const handleDiscoverActivities = () => {
    // Placeholder for API call to fetch activities based on user preferences
    // Example: fetchActivities(location, date, interests)
    // Update 'activities' state with fetched data
    console.log('Discovering activities...');
  };

  const handleBookActivity = (activityId) => {
    // Placeholder for activity booking logic
    console.log(`Booking activity with ID: ${activityId}`);
    // Implement booking process (e.g., API call, confirmation)
    // Show booking confirmation to the user
    alert('Activity booked successfully!');
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-semibold mb-4">Activity & Tour Bookings</h2>
      <div className="mb-4">
        <button onClick={handleDiscoverActivities} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Discover Activities
        </button>
      </div>
      {/* Activity Listings */}
      {activities.map((activity) => (
        <div key={activity.id} className="border-b border-gray-300 pb-4 mb-4">
          <p className="text-lg font-medium">{activity.name}</p>
          <p className="text-gray-600">Date: {activity.date}</p>
          <p className="text-gray-600">Time: {activity.time}</p>
          <p className="text-gray-600">Location: {activity.location}</p>
          <p className="text-gray-600">Price: {activity.price}</p>
          <button
            onClick={() => handleBookActivity(activity.id)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-2"
          >
            Book Now
          </button>
        </div>
      ))}
      {/* Booking Form (to be implemented) */}
      {/* Example activity booking form (hidden by default) */}
      {/* <form onSubmit={() => handleBookActivity(selectedActivityId)}> */}
      {/*   <input type="text" placeholder="Enter activity ID" className="border border-gray-300 rounded-md px-4 py-2 mb-2" /> */}
      {/*   <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"> */}
      {/*     Book Activity */}
      {/*   </button> */}
      {/* </form> */}
    </div>
  );
};

export default ActivityBooking;
