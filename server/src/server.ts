import express from 'express';
import cors from 'cors';
import userRoutes from '../src/routes/api/user-routes';
import sequelize from './config/database';
// import axios from 'axios';

const app = express();
app.use(cors());
app.use(express.json());
// const response = axios.get('https://zenquotes.io/api/image/').then(response=>console.log(response));

// Test the database connection
sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch((error) => console.error('Error connecting to the database:', error));

// Use user routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
