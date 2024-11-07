import { useEffect, useState } from 'react';

function QuoteImage() {
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState(null); // State to track any errors

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch('https://random.imagecdn.app/500/150');
        console.log(response)
        
        // Check if the response is not OK (status code outside of 200-299)
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        
        setImageUrl(response.url); // Adjust based on actual response format
      } catch (error) {
        // Log error and set it to state for user-friendly error display
        console.error("Error fetching quote image:", error);
        setError(error.message); // Store the error message to display it in the UI
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
