// PricePredictionPage.js

import React, { useState } from 'react';
import './PricePredictionPage.css'; // Import CSS file

const PricePredictionPage = () => {
  const [carDetails, setCarDetails] = useState({
    make: '',
    model: '',
    year: '',
    mileage: '',
    condition: '',
  });
  const [predictedPrice, setPredictedPrice] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarDetails({ ...carDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call your price prediction API or perform calculations here
    // For demonstration, let's set a random price
    const randomPrice = Math.floor(Math.random() * 100000) + 5000;
    setPredictedPrice(randomPrice.toString());
  };

  return (
    <div className="price-prediction-container">
      <h1>Price Prediction</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Make:</label>
          <input
            type="text"
            name="make"
            value={carDetails.make}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Model:</label>
          <input
            type="text"
            name="model"
            value={carDetails.model}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Year:</label>
          <input
            type="number"
            name="year"
            value={carDetails.year}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Mileage:</label>
          <input
            type="number"
            name="mileage"
            value={carDetails.mileage}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Condition:</label>
          <select
            name="condition"
            value={carDetails.condition}
            onChange={handleChange}
            required
          >
            <option value="">Select Condition</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </select>
        </div>
        <button type="submit">Predict Price</button>
      </form>
      {predictedPrice && (
        <div className="predicted-price">
          <h2>Predicted Price:</h2>
          <p>${predictedPrice}</p>
        </div>
      )}
    </div>
  );
};

export default PricePredictionPage;
