import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Bar, Doughnut ,Line} from 'react-chartjs-2';
import Chart from 'chart.js/auto'; // Import Chart.js library
import Tablees from './Tablees';
import Performance from './Performance';
import Download from './Download';

const Dashboard = () => {
    const [inventorySummary, setInventorySummary] = useState({
        totalValue: 0,
        totalItems: 0,
        criticalItems: 0
    });

    const [filteredInventory, setFilteredInventory] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('All');
    const [availabilityFilter, setAvailabilityFilter] = useState('All');
    const [criticalFilter, setCriticalFilter] = useState('All');
    

    const [criticalAlerts, setCriticalAlerts] = useState([]);


    const chartRef = useRef(null);
    const pieChartRef = useRef(null);
    const lineChartRef = useRef(null);
    const thresholdChartRef = useRef(null);


    // Simulated inventory data (replace with actual data fetching)
    const inventoryData = [
        { itemName: 'Rifles', quantityAvailable: 1500, criticalLevel: 20, lastReplenished: '2024-04-10', unitCost: 35000 },
        { itemName: 'Ammunition', quantityAvailable: 3500, criticalLevel: 1000, lastReplenished: '2024-04-09', unitCost: 12000 },
        { itemName: 'Tanks', quantityAvailable: 2000, criticalLevel: 1000, lastReplenished: '2024-04-09', unitCost: 50000 },
        { itemName: 'Bombs', quantityAvailable: 4500, criticalLevel: 1000, lastReplenished: '2024-04-09', unitCost: 20000 }
    ];

    useEffect(() => {
        // Calculate inventory summary

    // const totalValue = inventoryData.reduce((total, item) => total + item.quantityAvailable * item.unitCost, 0);
        let totalValue = 0;
        inventoryData.forEach(item => {
            totalValue += item.unitCost * item.quantityAvailable;
        })
        
        const totalItems = inventoryData.length;
        const criticalItems = inventoryData.filter(item => item.quantityAvailable <= item.criticalLevel).length;

        setInventorySummary({
            totalValue,
            totalItems,
            criticalItems
        });
    }, []);

    const criticalItemsList = inventoryData.filter(item => item.quantityAvailable <= item.criticalLevel);
    const alerts = criticalItemsList.map(item => ({
        itemName: item.itemName,
        quantityAvailable: item.quantityAvailable,
        criticalLevel: item.criticalLevel,
        message: `Critical level reached for ${item.itemName}.`
    }));

    //setCriticalAlerts(alerts);

    // Filter inventory based on search term and filters
    useEffect(() => {
        const filteredItems = inventoryData.filter(item => {
            const matchesSearch = item.itemName.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = categoryFilter === 'All' || item.category === categoryFilter;
            const matchesAvailability = availabilityFilter === 'All' || item.quantityAvailable >= parseInt(availabilityFilter);
            const matchesCritical = criticalFilter === 'All' || (item.quantityAvailable <= item.criticalLevel && criticalFilter === 'Critical');

            return matchesSearch && matchesCategory && matchesAvailability && matchesCritical;
        });

        //setFilteredInventory(filteredItems);
    }, []);

    // Chart rendering effects (omitted for brevity)...

    // Display critical alerts
    useEffect(() => {
        if (criticalAlerts.length > 0) {
            alert(criticalAlerts.map(alert => alert.message).join('\n'));
        }
    },[]);




    useEffect(() => {
        // Render bar chart when inventoryData or inventorySummary changes
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            const newBarChartInstance = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: inventoryData.map(item => item.itemName),
                    datasets: [{
                        label: 'Quantity Available',
                        backgroundColor: 'rgba(54, 162, 235, 0.6)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1,
                        data: inventoryData.map(item => item.quantityAvailable)
                    }]
                },
                options: {
                    responsive: true
                }
            });

            return () => {
                newBarChartInstance.destroy();
                        };
                    }
                }, []);




                useEffect(() => {
                    // Render pie chart for inventory distribution
                    if (pieChartRef.current) {
                        const ctx = pieChartRef.current.getContext('2d');
                        const inventoryQuantityData = inventoryData.map(item => item.quantityAvailable);
                        const labels = inventoryData.map(item => item.itemName);

                        const newPieChartInstance = new Chart(ctx, {
                            type: 'doughnut',
                            data: {
                                labels,
                                datasets: [{
                                    label: 'Inventory Items',
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.6)',
                                        'rgba(54, 162, 235, 0.6)',
                                        'rgba(255, 205, 86, 0.6)',
                                        'rgba(75, 192, 192, 0.6)'
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 1)',
                                        'rgba(54, 162, 235, 1)',
                                        'rgba(255, 205, 86, 1)',
                                        'rgba(75, 192, 192, 1)'
                                    ],
                                    borderWidth: 0.1,
                                    data: inventoryQuantityData
                                }]
                            },
                            options: {
                                responsive: true
                            }
                        });

                        return () => {
                            newPieChartInstance.destroy();
                        };
                    }
                }, []);

                useEffect(() => {
                    // Render line chart for inventory units vs. items available
                    if (lineChartRef.current) {
                        const ctx = lineChartRef.current.getContext('2d');
                        const units = ['Unit 1', 'Unit 2', 'Unit 3', 'Unit 4', 'Unit 5'];
                        const itemsAvailable = [1000, 2000, 3000, 4000, 5000]; // Example data for items available in each unit

                        const newLineChartInstance = new Chart(ctx, {
                            type: 'line',
                            data: {
                                labels: units,
                                datasets: [{
                                    label: 'Items Available',
                                    borderColor: 'rgba(255, 99, 132, 1)',
                                    borderWidth: 2,
                                    data: itemsAvailable
                                }]
                            },
                            options: {
                                responsive: true,
                                scales: {
                                    y: {
                                        beginAtZero: true,
                                        title: {
                                            display: true,
                                            text: 'Number of Items'
                                        }
                                    },
                                    x: {
                                        title: {
                                            display: true,
                                            text: 'Inventory Units'
                                        }
                                    }
                                }
                            }
                        });

                        return () => {
                            newLineChartInstance.destroy();
                        };
                    }
                }, []);

                useEffect(() => {
                    // Render threshold line chart for critical levels
                    if (thresholdChartRef.current) {
                        const ctx = thresholdChartRef.current.getContext('2d');
                        const itemNames = inventoryData.map(item => item.itemName);
                        const criticalLevels = inventoryData.map(item => item.criticalLevel);

                        const thresholdChart = new Chart(ctx, {
                            type: 'line',
                            data: {
                                labels: itemNames,
                                datasets: [{
                                    label: 'Critical Level',
                                    borderColor: 'rgba(255, 206, 86, 1)',
                                    borderWidth: 2,
                                    data: criticalLevels
                                }]
                            },
                            options: {
                                responsive: true,
                                scales: {
                                    y: {
                                        beginAtZero: true,
                                        title: {
                                            display: true,
                                            text: 'Critical Level'
                                        }
                                    },
                                    x: {
                                        title: {
                                            display: true,
                                            text: 'Item Name'
                                        }
                                    }
                                }
                            }
                        });

                        return () => {
                            thresholdChart.destroy();
                        };
                    }
                }, []);


                return (
                    <div className="p-4">
                         <div className="flex items-center justify-between">
                            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
                            <div>
                                <Link to="/cnn" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                                    Live Image Feed
                                </Link>
                                <Link to="/predictive" className="bg-blue-500 text-white px-4 py-2 rounded ml-4 hover:bg-blue-600">
                                    Predictive Inventory Analysis
                                </Link>
                            </div>
                        </div>


                        {/* Search and Filter Controls */}
                        <div className="mb-6">
                            <input
                                type="text"
                                placeholder="Search by item name"
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                                className="border border-gray-300 rounded-md p-2 mr-4"
                            />
                            <select
                                value={categoryFilter}
                                onChange={e => setCategoryFilter(e.target.value)}
                                className="border border-gray-300 rounded-md p-2 mr-4"
                            >
                                <option value="All">All Categories</option>
                                <option value="Weapons">Weapons</option>
                                <option value="Vehicles">Vehicles</option>
                                <option value="Ammunition">Ammunition</option>
                                <option value="Explosives">Explosives</option>
                                <option value="Miscellaneous">Miscellaneous</option>
                            </select>
                            <select
                                value={availabilityFilter}
                                onChange={e => setAvailabilityFilter(e.target.value)}
                                className="border border-gray-300 rounded-md p-2 mr-4"
                            >
                                <option value="All">All Availability</option>
                                <option value="1000">1000 or more</option>
                                <option value="2000">5000 or more</option>
                                <option value="3000">10000 or more</option>
                                <option value="4000">20000 or more</option>
                                <option value="5000">50000 or more</option>
                                <option value="6000">100000 or more</option>
                                <option value="7000">200000 or more</option>
                            </select>
                            <select
                                value={criticalFilter}
                                onChange={e => setCriticalFilter(e.target.value)}
                                className="border border-gray-300 rounded-md p-2"
                            >
                                <option value="All">All Items</option>
                                <option value="Critical">Critical Items</option>
                                <option value="Non-Critical">Non-Critical Items</option>
                                <option value="Replenished">Replenished Items</option>
                                <option value="Not-Replenished">Not Replenished Items</option>
                                <option value="Expired">Expired Items</option>
                                <option value="Not-Expired">Not Expired Items</option>
                             
                            </select>
                        </div>

                        {/* Inventory Overview */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                                <h2 className="text-xl font-semibold mb-2">Total Inventory Value</h2>
                                <p className="text-3xl font-bold">${inventorySummary.totalValue}</p>
                            </div>
                            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                                <h2 className="text-xl font-semibold mb-2">Total Items in Stock</h2>
                                <p className="text-3xl font-bold">{inventorySummary.totalItems}</p>
                            </div>
                            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                                <h2 className="text-xl font-semibold mb-2">Critical Items</h2>
                                <p className="text-3xl font-bold">{inventorySummary.criticalItems}</p>
                            </div>
                            {/* ... */}
                        </div>

                        {/* Inventory Charts */}
                        <div className="grid grid-cols-2 gap-8">
                        
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <h2 className="text-xl font-semibold mb-4">Inventory Distribution</h2>
                                <canvas ref={chartRef} />
                            </div>

                            {/* Pie Chart (Inventory Items) */}
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <h2 className="text-xl font-semibold mb-4">Inventory Items</h2>
                                <canvas ref={pieChartRef} />
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <h2 className="text-xl font-semibold mb-4">Inventory Units vs. Items Available</h2>
                                <canvas ref={lineChartRef} />
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <h2 className="text-xl font-semibold mb-4">Threshold Line Chart (Critical Levels)</h2>
                                <canvas ref={thresholdChartRef} />
                                
                            </div>
                            
                        </div>
                        <div className="grid grid-cols-1 gap-8">
                        <Tablees data={inventoryData} />
                        </div>
                        {/* Replenishment Alerts (placeholder) */}
                        {/* ... */}

                        {/* Navigation Link */}
                        <div className="flex justify-center items-center mt-6">
            {/* Button to go back to Home */}
            <Link to="/" className="bg-red-600 text-white flex items-center justify-center py-2 px-4 rounded-lg mr-4 hover:underline">
                Go back to Home
            </Link>

            {/* Button to navigate to Performance.jsx */}
            <Link to="/performance" className="bg-blue-600 text-white flex items-center mr-4 justify-center py-2 px-4 rounded-lg hover:underline">
                Performance Metrics
            </Link>

            <Link to="/Download" className="bg-blue-600 text-white flex items-center justify-center mr-4 py-2 px-4 rounded-lg hover:underline">Download Inventory Report
        </Link>
        <Link to="/Geography" className="bg-blue-600 text-white flex items-center justify-center py-2 px-4 mr-4 rounded-lg hover:underline">Geo-Tagged Inventory
        </Link>
        <Link to="/Pathtaken" className="bg-blue-600 text-white flex items-center justify-center py-2 px-4 rounded-lg hover:underline">Plan your Route
        </Link>
        </div>
                    </div>
                );
            };

            export default Dashboard;
