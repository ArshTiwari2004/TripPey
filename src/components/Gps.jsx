import React, { useState, useEffect } from 'react';

const Gps = () => {
    const [inventoryItems, setInventoryItems] = useState([]);

    // Simulated inventory data with GPS coordinates
    const sampleInventoryData = [
        { id: 1, name: 'Rifles', location: { lat: 51.505, lng: -0.09 } },
        { id: 2, name: 'Ammunition', location: { lat: 52.0, lng: -1.0 } },
        { id: 3, name: 'Tanks', location: { lat: 51.5, lng: 0.1 } },
        { id: 4, name: 'Bombs', location: { lat: 51.3, lng: -0.5 } },
        { id: 5, name: 'Medical Supplies', location: { lat: 52.5, lng: -0.1 } }
    ];

    // Simulated API call to fetch inventory data
    const fetchInventoryData = () => {
        // Simulate API call (replace with actual API integration)
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(sampleInventoryData);
            }, 1000);
        });
    };

    useEffect(() => {
        const loadInventoryData = async () => {
            try {
                const data = await fetchInventoryData();
                setInventoryItems(data);
            } catch (error) {
                console.error('Error fetching inventory data:', error);
                // Handle error
            }
        };

        loadInventoryData();
    }, []);

    return (
        <div className="mt-8 p-4 bg-gray-200 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">GPS Inventory Tracking</h2>
            <p className="text-lg">
                Implementing GPS tracking for critical inventory items is crucial for operational effectiveness and safety. Each item is equipped with a GPS-enabled tag or device that communicates its location in real-time.
            </p>
            <p className="text-lg">
                Integrate the GPS tracking data with your inventory management system to access and display the location of tagged items on a map interface.
            </p>
            <div className="mt-4">
                <h3 className="text-xl font-bold mb-2">Inventory Locations</h3>
                <ul>
                    {inventoryItems.map(item => (
                        <li key={item.id}>
                            {item.name}: ({item.location.lat}, {item.location.lng})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Gps;
