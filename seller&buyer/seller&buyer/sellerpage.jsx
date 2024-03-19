// SellerPage.jsx

import React, { useState } from 'react';
import './SellerPage.css'; // Import CSS file

const SellerPage = () => {
  const [carDetails, setCarDetails] = useState({
    make: '',
    model: '',
    year: '',
    price: '',
    condition: '',
    mileage: '',
    description: '',
    photos: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarDetails({ ...carDetails, [name]: value });
  };

  const handlePhotoUpload = (e) => {
    const files = e.target.files;
    const uploadedPhotos = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        uploadedPhotos.push(reader.result);
        if (uploadedPhotos.length === files.length) {
          setCarDetails({ ...carDetails, photos: uploadedPhotos });
        }
      };
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', carDetails);
  };

  return (
    <div className="seller-page-container">
      <h1>Sell Your Car</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Make:</label>
          <input
            type="text"
            name="make"
            value={carDetails.make}
            onChange={handleChange}
          />
        </div>
        {/* Rest of the form inputs */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SellerPage;
