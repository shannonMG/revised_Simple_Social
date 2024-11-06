import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';

const ZenPage = () => {
  const location = useLocation();
  const [imageUrl, setImageUrl]=useState('');
  const [loading, setLoading]=useState(true);
  const data = location.state?.data; // Access the passed data

  useEffect(() => {
    const fetchImage= async ()=> {
        try {
            const response = await fetch ('http://localhost:5173/api/image/');
            const result = await response.json();
            setImageUrl(result.imageUrl); // Assuming the API returns an object with an imageUrl property 

        } catch (error) {
            console.error('Error fetching the image:', error);
        } finally {
            setLoading(false);
        }
    };
    fetchImage();
  }, []);

  return (
    <div>
      <h1>Zen Page</h1>
      {/* Render the fetched data here */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        imageUrl && <img src={imageUrl} alt="Fetched from API" />
      )}
    </div>
  );
};

export default ZenPage;