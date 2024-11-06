// src/pages/LandingPage.tsx
import React from 'react';
import { Link } from 'react-router-dom'
import CircleCard from '../components/circleCard';
import zenImage from '../assets/zen.png';

const HomePage: React.FC = () => {
  return (
    <div className="">
      <h2 className="">Featured Circles:</h2>
      <div className="">
        
        <Link to="/zen">
        <CircleCard
          image="../assets/zen.png" // Adjust path if needed or use import
          title="Zen Circle"
          summary="Having a tough day? Join this circle for a pick me up."

          circleLink="https://github.com/shannonMG/prework-study-guide"
        />
        
        <CircleCard 
          image="" // Adjust path if needed or use import
          title="Art Circle"
          summary="Do you like art! Check out this circle to get some artwork inspiration"
          circleLink="https://github.com/shannonMG/"
        />
        <CircleCard 
          image="" // Adjust path if needed or use import
          title="Soccer Circle"
          summary="Soccer. Just Soccer."
          circleLink="https://github.com/shannonMG/"
        />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
