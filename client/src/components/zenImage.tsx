import { useEffect, useState } from 'react';
import React from 'react';

function QuoteImage() {
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState<string | null>(null); // State to track any errors

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch('https://random.imagecdn.app/500/150');
        console.log(response);
        
        // Check if the response is not OK (status code outside of 200-299)
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        
        setImageUrl(response.url); // Adjust based on actual response format
      } catch (error) {
        // Explicitly assert error type for TypeScript
        const err = error as Error; // Type assertion for error
        console.error("Error fetching quote image:", err);
        setError(err.message); // Store the error message to display it in the UI
      }
    };

    fetchImage();
  }, []);

  return (
    <div>
      {error ? (
        <p>Error loading quote: {error}</p> // Display the error message
      ) : imageUrl ? (
        <img src={imageUrl} alt="Inspirational Quote" />
      ) : (
        <p>Loading quote...</p>
      )}
    </div>
  );
}

export default QuoteImage;
