import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Chooseus = () => {
  const features = [
    {
      title: 'Discover Nearby Services',
      description:
        'Easily find hotels, restaurants, chemists, food spots, shopping centers, police stations, and tourist attractions in your vicinity.',
      image: '/where.jpg'
    },
    {
      title: 'Reservation and Booking',
      description:
        'Make online reservations and bookings for hotels, restaurants, and other services directly through the app.',
      image: '/booking.jpg'
    },
    // Add more features following the same structure
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="w-full">
      {/* <div className="relative"> */}
        <img src="/beach.jpg" alt="Jaipur" className=" absolute w-25 h-25  opacity-100" />
        <div className="absolute inset-0  bg-opacity-50" />
        <div className="relative bg-opacity-50 py-20 px-30" id="featuresSection">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl flex justify-center items-center font-bold mb-6 text-white">Why Choose Us?</h2>
            <Slider {...settings}>
              {features.map((feature, index) => (
                <div key={index} className="p-4 bg-white rounded shadow-md text-center ">
                  <img src={feature.image} alt={feature.title} className="h-80 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Chooseus;

