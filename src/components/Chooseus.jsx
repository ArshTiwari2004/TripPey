// src/components/Chooseus.js

import React from 'react';

const Chooseus = () => {
  return (
    <div className="bg-yellow-200 py-10" id="featuresSection">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Add your feature cells here */}
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-2xl font-bold mb-2">Seamless Travel Experience</h3>
            <p>
              TripPey revolutionizes travel by blending convenience, cultural immersion, and personalized exploration.
            </p>
          </div>
          <div className="p-4 bg-white rounded shadow">
            <h3 className="text-2xl font-bold mb-2">Innovative Rewards System</h3>
            <p>
              Our rewards system incentivizes engagement, granting points for activities and experiences redeemable worldwide.
            </p>
          </div>
          {/* Add more feature cells */}
        </div>
      </div>
    </div>
  );
};

export default Chooseus;
