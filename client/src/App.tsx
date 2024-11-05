
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingpage';
import HomePage from './pages/homepage';
import Login from './components/login';
import Signup from './components/signup';

const App = () => {
  return (
    <Router>
      <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            
            {/* Routes after login */}

            <Route path="/home" element={<HomePage />}> 
            {/* <Route path="circle1" element={<Circle1Page />} /> Circle 1 page */}
            {/* <Route path="circle2" element={<Circle2Page />} /> Circle 2 page */}
            {/* <Route path="circle3" element={<Circle3Page />} /> Circle 3 page */}
          </Route>
      </Routes>
    </Router>
  );
};

export default App;
