// App.tsx

import dotenv from 'dotenv';
dotenv.config();

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingpage';
import Login from './components/login';
import Signup from './components/signup';
import styles from './app.module.css';

const App = () => {
  return (
    <Router>
      <div className={styles.appContainer}>
        <div className={styles.componentWrapper}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
