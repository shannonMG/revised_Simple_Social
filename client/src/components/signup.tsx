import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './loginandsignup.module.css';
import '../index.css'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const [time_zone, setTimeZone] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // To redirect the user after signup

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state
    try {
      const response = await fetch('http://localhost:3000/api/users/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          location,
          time_zone,
        }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Store the JWT token
        localStorage.setItem('token', data.token);
        console.log("User created:", data);
        // Redirect to the home page
        navigate('/home');
      } else {
        setError(data.message || 'Failed to create account');
        console.error("Error:", data.message);
      }
    } catch (err) {
      console.error("Error during sign-up:", err);
      setError('An error occurred during sign-up. Please try again.');
    }
  };
  

  return (
    <div className={styles.container}>
      <form className={styles.formCard} onSubmit={handleSubmit}>
        <h2 className={styles.heading}>Sign Up</h2>
        {error && <p className={styles.error}>{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className={styles.input}
          required
        />
        <select
          value={time_zone}
          onChange={(e) => setTimeZone(e.target.value)}
          className={styles.input}
          required
        >
          <option value="">Select a time zone</option>
          <option value="America/New_York">America/New_York</option>
          <option value="Europe/London">Europe/London</option>
          {/* Add more time zones as needed */}
        </select>
        <button type="submit" className={styles.button}>Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
