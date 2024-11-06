import React from 'react';
import { useLocation } from 'react-router-dom';

const ZenPage = () => {
  const location = useLocation();
  const data = location.state?.data; // Access the passed data

  return (
    <div>
      <h1>Zen Page</h1>
      {/* Render the fetched data here */}
      {data && <img src={data.imageUrl} alt="Fetched from API" />} {/* Example usage */}
    </div>
  );
};

export default ZenPage;