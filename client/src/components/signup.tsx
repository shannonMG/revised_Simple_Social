// src/components/Signup.tsx
import React, { useState } from 'react';
import styles from './loginandsignup.module.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const [timeZone, setTimeZone] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Reset error message

    try {
      const response = await fetch('http://localhost:3000/users/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, location, time_zone: timeZone }),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token); // Store the JWT in localStorage
        alert('Signup successful!');
        // Redirect or reset the form
        setEmail('');
        setPassword('');
        setLocation('');
        setTimeZone('');
        window.location.href = '/home'; // Redirect after successful signup
      } else {
        setError(data.message || 'Signup failed');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('An error occurred. Please try again later.');
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
          value={timeZone}
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
