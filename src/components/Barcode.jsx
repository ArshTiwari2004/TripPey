import React, { useState } from 'react';
import QrReader from 'react-qr-reader';

const Barcode = () => {
  const [result, setResult] = useState('');

  const handleScan = (data) => {
    if (data) {
      setResult(data);

      // Simulated API call to update inventory based on scanned data
      updateInventory(data);
    }
  };

  const handleError = (err) => {
    console.error('Barcode Scanner Error:', err);
  };

  const updateInventory = (barcodeData) => {
    // Example logic: Simulating an API call to update inventory
    const apiUrl = 'https://your-inventory-api.com/update';
    const payload = {
      barcode: barcodeData,
      timestamp: new Date().toISOString(),
      // Add additional data as needed
    };

    // Simulated fetch API call (replace this with your actual API call)
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Inventory Updated Successfully!');
          // Implement your state update logic if needed
        } else {
          console.error('Failed to update inventory.');
        }
      })
      .catch((error) => {
        console.error('Error updating inventory:', error);
      });
  };

  return (
    <div>
      <h2>Barcode Scanner</h2>
      <div>
        {/* QR Code scanner component */}
        <QrReader
          delay={300} // Delay between scans in milliseconds
          onError={handleError} // Callback for errors
          onScan={handleScan} // Callback for successful scan
          style={{ width: '100%' }} // Style for the scanner area
        />
      </div>
      <div>
        {/* Display the scanned result */}
        <p>Scanned Barcode: {result}</p>
      </div>
    </div>
  );
};

export default Barcode;
