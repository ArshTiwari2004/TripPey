import React, { useState } from 'react';

const PathTaken = () => {
    const [routeInfo, setRouteInfo] = useState(null);

    // Function to simulate planning route with API integration
    const planRoute = async () => {
        try {
            // Simulate fetching traffic and weather data from APIs
            const trafficData = await fetchTrafficData();
            const weatherData = await fetchWeatherData();

            // Simulate route optimization based on received data
            const optimizedRoute = optimizeRoute(trafficData, weatherData);

            // Set route information to state
            setRouteInfo(optimizedRoute);
        } catch (error) {
            console.error('Error planning route:', error);
            alert('Failed to plan route. Please try again later.');
        }
    };

    // Simulated function to fetch traffic data from an API
    const fetchTrafficData = async () => {
        // Simulate API call (replace with actual traffic API integration)
        return { traffic: 'high', congestion: 'moderate' };
    };

    // Simulated function to fetch weather data from an API
    const fetchWeatherData = async () => {
        // Simulate API call (replace with actual weather API integration)
        return { weather: 'sunny', temperature: '25°C' };
    };

    // Simulated route optimization based on traffic and weather data
    const optimizeRoute = (trafficData, weatherData) => {
        // Simulate optimization logic (replace with actual route planning algorithm)
        const recommendedRoute = {
            start: 'Warehouse A',
            end: 'Warehouse B',
            distance: '200 km',
            estimatedTime: '3 hours',
            traffic: trafficData.traffic,
            congestion: trafficData.congestion,
            weather: weatherData.weather,
            temperature: weatherData.temperature
        };

        return recommendedRoute;
    };

    return (
        <div className="mt-8 p-4 bg-gray-200 rounded-lg shadow-md">
            <h2 className="text-2xl flex item-center justify-center font-bold mb-4">Route Planning</h2>
            <p className="text-lg text-center">
                Rakshak provides  route planning tools that optimize supply convoy routes based on terrain, threat assessments, and mission objectives. Incorporate real-time traffic and weather data for adaptive planning.
            </p>
            <div className="flex justify-center mt-4">
                <button
                    onClick={planRoute}
                    className="bg-blue-600 text-white py-3 px-6 rounded-lg text-xl hover:bg-blue-700"
                >
                    Plan Route
                </button>
            </div>
            {routeInfo && (
                <div className="mt-6">
                    <h3 className="text-xl font-bold">Recommended Route</h3>
                    <p>Start: {routeInfo.start}</p>
                    <p>End: {routeInfo.end}</p>
                    <p>Distance: {routeInfo.distance}</p>
                    <p>Estimated Time: {routeInfo.estimatedTime}</p>
                    <p>Traffic: {routeInfo.traffic}</p>
                    <p>Congestion: {routeInfo.congestion}</p>
                    <p>Weather: {routeInfo.weather}</p>
                    <p>Temperature: {routeInfo.temperature}</p>
                </div>
            )}
        </div>
    );
};

export default PathTaken;
