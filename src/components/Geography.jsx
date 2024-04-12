import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Geography = ({ inventoryLocations }) => {
    // Sample data for inventory locations (replace this with actual data)
    const sampleLocations = [
        {
            name: 'Warehouse A',
            item: 'Rifles',
            quantity: 1500,
            lastUpdate: '2024-04-10',
            lat: 51.505,
            lng: -0.09
        },
        {
            name: 'Warehouse B',
            item: 'Ammunition',
            quantity: 3500,
            lastUpdate: '2024-04-09',
            lat: 52.0,
            lng: -1.0
        },
        {
            name: 'Warehouse C',
            item: 'Tanks',
            quantity: 2000,
            lastUpdate: '2024-04-09',
            lat: 51.5,
            lng: 0.1
        },
        {
            name: 'Warehouse D',
            item: 'Bombs',
            quantity: 4500,
            lastUpdate: '2024-04-09',
            lat: 51.3,
            lng: -0.5
        }
    ];

    // Use actual inventory locations if provided, otherwise use sampleLocations
    const locationsToRender = inventoryLocations && inventoryLocations.length > 0 ? inventoryLocations : sampleLocations;

    return (
        <div className="mt-8">
            <div className="text-center mb-4 fixed top-0 left-0 w-full bg-gray-800 text-white p-4">
                <h1 className="text-2xl font-bold">Geo-Tagged Inventories</h1>
            </div>
            <div className="text-center mt-16 mb-4">
                <p className="text-lg">
                    At Rakshak, we're excited to offer advanced geospatial visualization capabilities that empower you to gain deep insights into inventory distribution, warehouse locations, and delivery routes with ease. Our interactive map feature provides a dynamic way to explore your inventory landscape, allowing you to seamlessly navigate through geographic data and perform spatial analysis effortlessly.
                </p>
                <p className="text-lg">
                    With our map visualization tool, you can visualize your inventory distribution across different locations, identify key warehouse facilities, and analyze delivery routes to optimize logistics and resource allocation. The interactive nature of the map enables users to click on specific locations to view detailed inventory information, including item types, quantities, and last update timestamps.
                </p>
            </div>
            <div className="p-4 bg-gray-200 rounded-lg shadow-md">
                <MapContainer
                    center={[51.505, -0.09]} // Default center position (London)
                    zoom={3} // Default zoom level
                    style={{ height: '400px', width: '100%' }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {/* Render markers for each inventory location */}
                    {locationsToRender.map((location, index) => (
                        <Marker key={index} position={[location.lat, location.lng]}>
                            <Popup>
                                <div>
                                    <h3 className="font-semibold">{location.name}</h3>
                                    <p>Inventory Details:</p>
                                    <ul>
                                        <li>Item: {location.item}</li>
                                        <li>Quantity: {location.quantity}</li>
                                        <li>Last Update: {location.lastUpdate}</li>
                                    </ul>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
            <div className="flex justify-center mt-8">
                <button className="bg-blue-600 text-white mt-[-0.2in] py-3 px-6 rounded-lg text-xl hover:bg-blue-700">
                    Dashboard
                </button>
            </div>
        </div>
    );
};

export default Geography;
