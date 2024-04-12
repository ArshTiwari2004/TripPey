import React from "react";

const MainSection = ({ title, subheading, image }) => {
  return (
    <div className="bg-gray-800 text-white py-12 lg:flex lg:items-center lg:justify-between">
      {/* Left Section */}
      <div className="lg:w-1/2 lg:px-8 mb-6 lg:mb-0">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-lg mb-4">{subheading}</p>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 px-4 py-4 border rounded-lg shadow-lg">
        <img
          src="../images/army.jpeg"
          alt="Main Section Image"
          className="w-full h-full object-cover rounded-lg py-2 "
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
      </div>
    </div>
  );
};

const Feature = ({ title, description, image, reverse }) => {
  // Determine the flex direction based on the 'reverse' prop
  const flexDirection = reverse ? 'lg:flex-row-reverse' : 'lg:flex-row';

  return (
    <div className={`bg-green-200 flex items-center justify-center lg:justify-start mb-8 ${flexDirection}`}>
      {/* Left Section */}
      <div className="lg:w-1/2 lg:pr-8">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-gray-700 mb-4">{description}</p>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2">
        <img src={image} alt="Feature Image" className="w-full lg:w-2/3 rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

const HomePage = () => {
  const mainSection = {
    title: "RAKSHAK ",
    subheading:
    "Rakshak provides an Automated Inventory Management System powered by cutting-edge technology streamlining resource allocation across defense forces. Additionally our Deep Learning CNN Model utilizes satellite imagery for real time detection of trafficking and suspicious activities, enhancing national security effort and complemented by a Unified Dashboard fostering seamless collaboration and situational awareness.",
    image: "/images/main-section.jpg"
  };

  const features = [
    {
      title: "Performance Matrix of Inventory",
      description: "Monitor inventory performance metrics efficiently.",
      image: "/images/v2.jpg"
    },
    {
      title: "Download Customizable Inventory Report",
      description: "Generate and download detailed inventory reports.",
      image: "/images/v1.jpg"
    },
    {
      title: "Inventory Locations on Map",
      description: "View inventory locations on an interactive map.",
      image: "/images/c1.jpeg"
    },
    {
      title: "Route Planning with Weather Conditions",
      description: "Plan routes considering weather and geographical conditions.",
      image: "/images/cvc.jpg"
    },
    {
      title: "Critical Item Calculation",
      description: "Automatically calculate critical items in stock.",
      image: "/images/Inventory-Template.jpg"
    },
    {
      title: "Inventory Value Calculation",
      description: "Calculate total inventory value using advanced analytics.",
      image: "/images/wer.jpg"
    },
    {
      title: "Real-time Threat Detection",
      description: "Utilize AI for proactive real-time threat detection.",
      image: "/images/qqqq.jpg"
    },
    {
      title: "Unified Inventory Management Dashboard",
      description: "Access a user-friendly dashboard for automated inventory management.",
      image: "/images/asdfg.jpg"
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Main Section */}
      <MainSection
        title={mainSection.title}
        subheading={mainSection.subheading}
        image={mainSection.image}
      />

      {/* Features Section */}
      <div className="container mx-auto p-4">
        {features.map((feature, index) => (
          <Feature
            key={index}
            title={feature.title}
            description={feature.description}
            image={feature.image}
            reverse={index % 2 !== 0} // Alternate the layout based on index (odd/even)
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
