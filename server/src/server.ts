import express from 'express';
import cors from 'cors';
import userRoutes from '../src/routes/api/user-routes';
import sequelize from './config/database';
//installed axios to troubleshoot
import axios from 'axios';

const app = express();
app.use(cors());
app.use(express.json());

// Test the database connection
sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch((error) => console.error('Error connecting to the database:', error));

// Use user routes
app.use('/api/users', userRoutes);

//SK added this code
app.get('/api/image', async (req, res) => {
  try {
      const response = await axios.get('https://zenquotes.io/api/image/');
      res.json(response.data);
  } catch (error) {
      res.status(500).json({ error: 'Error fetching image' });
  }
});

//this is added code

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
