import React from 'react';

const Performance = ({ inventoryData }) => {
    // Calculate performance metrics
    const calculateInventoryTurnover = () => {
        if (!inventoryData || inventoryData.length === 0) {
            return 0; // Return default value or handle empty case
        }

        const totalCostOfGoodsSold = inventoryData.reduce(
            (total, item) => total + (item.unitCost * item.quantitySold),
            0
        );
        const averageInventoryValue = inventoryData.reduce(
            (total, item) => total + (item.unitCost * item.quantityAvailable),
            0
        ) / inventoryData.length;

        return totalCostOfGoodsSold / averageInventoryValue;
    };

    const calculateUsagePattern = () => {
        if (!inventoryData || inventoryData.length === 0) {
            return 0; // Return default value or handle empty case
        }

        const totalItemsUsed = inventoryData.reduce(
            (total, item) => total + item.quantitySold,
            0
        );
        const totalItemsAvailable = inventoryData.reduce(
            (total, item) => total + item.quantityAvailable,
            0
        );

        if (totalItemsAvailable === 0) {
            return 0; // Prevent division by zero
        }

        return (totalItemsUsed / totalItemsAvailable) * 100;
    };

    const renderPerformanceIndicators = () => {
        const inventoryTurnoverRate = calculateInventoryTurnover();
        const usagePattern = calculateUsagePattern();

        return (
            <div className="bg-green-200 rounded-lg shadow-md p-8 mb-4">
                <h2 className="text-2xl font-semibold mb-6 pb-2 border-b">Inventory Performance Metrics</h2>
                <div className="grid grid-cols-1 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-2">Inventory Turnover Rate</h3>
                        <p className="text-xl font-bold">{inventoryTurnoverRate.toFixed(2)}</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-lg font-semibold mb-2">Usage Pattern</h3>
                        <p className="text-xl font-bold">{usagePattern.toFixed(2)}%</p>
                    </div>
                    <div>
                
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            {renderPerformanceIndicators()}
        </div>
    );
};

export default Performance;

