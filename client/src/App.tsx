
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingpage';
import HomePage from './pages/homepage';
import Login from './components/login';
import Signup from './components/signup';
import Header from './components/Header';
import ZenPage from './pages/zenpage';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />

          {/* Routes after login */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/zen" element={<ZenPage />} /> {/* Define /zen at the top level */}
        </Routes>
      </div>
    </Router>
  );
};
export default App;

