import React from 'react';
import { saveAs } from 'file-saver';

const Download = ({ data }) => {
    const handleExportCSV = () => {
        if (data && data.length > 0) {
            const csvHeader = Object.keys(data[0]).join(','); // Get CSV header from keys of first object
            const csvContent = data.map(item => Object.values(item).join(',')).join('\n'); // Convert data to CSV rows

            const csvBlob = new Blob([`${csvHeader}\n${csvContent}`], { type: 'text/csv;charset=utf-8' });
            saveAs(csvBlob, 'inventory_report.csv');
        } else {
            alert('No data available to export.');
        }
    };

    return (
        <div className="mt-8 flex flex-col item-center justify-center p-4 bg-gray-400 rounded-lg shadow-md">
            <h2 className="text-2xl flex item-center justify-center font-bold mb-4">Download Inventory Report</h2>
            <p className="text-lg mb-4 text-center">
            Our website offers robust export functionality, empowering you to seamlessly download inventory reports and charts in various formats to suit your convenience. Whether you need to analyze detailed inventory data offline or share insightful charts with colleagues, our export feature provides the flexibility you require.
With our export capabilities, you can effortlessly download inventory reports as CSV files, allowing you to open and manipulate the data in spreadsheet applications such as Microsoft Excel or Google Sheets. This CSV format ensures compatibility across different platforms and simplifies data analysis tasks.
            </p>
            <button
                onClick={handleExportCSV}
                className=" bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
            >
                Download CSV Report
            </button>
            <p className="mt-4 text-sm italic text-gray-600">
                Note: Ensure your browser allows file downloads. If no data is available, the download button will be disabled.
            </p>
        </div>
    );
};

export default Download;
