// src/pages/LandingPage.tsx
import React from 'react';
import CircleCard from '../components/circleCard';
import styles from '../components/CircleCard.module.css'; // Import styles for layout
import {Link} from 'react-router-dom';

// // Import images
import zenImage from '../assets/zen.png';
import artImage from '../assets/creativity.png'; 
import soccerImage from '../assets/soccer-ball.png'; 

const HomePage: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <h2 className={styles.heading}>Featured Circles:</h2>
      <div className={styles.circleCardContainer}>
        
        <Link to ="/zen">
        <CircleCard 
          image={zenImage}
          title="Zen Circle"
          summary="Having a tough day? Join this circle for a pick-me-up."
          circleLink="https://github.com/shannonMG/prework-study-guide"
        />
        </Link>
        <CircleCard 
          image={artImage}
          title="Art Circle"
          summary="Do you like art? Check out this circle for some artwork inspiration."
          circleLink="https://github.com/shannonMG/"
        />
        <CircleCard 
          image={soccerImage}
          title="Soccer Circle"
          summary="Soccer. Just Soccer."
          circleLink="https://github.com/shannonMG/"
        />
      </div>
    </div>
  );
};

export default HomePage;
