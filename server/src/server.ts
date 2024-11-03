import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import sequelize from './config/database';

const app = express();
app.use(cors());
app.use(express.json());

// Test the database connection
sequelize.authenticate()
  .then(() => console.log('Database connected...'))
  .catch((error) => console.error('Error connecting to the database:', error));

// Use user routes
app.use('/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
