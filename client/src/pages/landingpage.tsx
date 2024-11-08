// src/pages/LandingPage.tsx
import { Link, Outlet, useLocation } from 'react-router-dom';
import '../../index.css';
import styles from './landingpage.module.css'; // Import the CSS module



const LandingPage = () => {
  const location = useLocation();
  const isBaseRoute = location.pathname === '/';

  return (
    <div className={styles.landingContainer}>
      {isBaseRoute && (
        <div className={styles.landingContent}>
          <h1 className={styles.heading}>Welcome to SimpleSocial</h1>
          <nav>
            <Link to="/login" className={styles.navLink}>
              Login
            </Link>
            <Link to="/signup" className={styles.navLink}>
              Sign Up
            </Link>
          </nav>
        </div>
      )}
      
      <Outlet />
    </div>
  );
};

export default LandingPage;
