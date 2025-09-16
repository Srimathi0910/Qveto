// src/components/LoadingSpinner.jsx
import React from 'react';
import '../styles.css'; 

const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner" />
      <p>Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
