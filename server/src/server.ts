import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from '../src/routes/api/user-routes';
import sequelize from './config/database';

dotenv.config(); // Load environment variables

const app = express();
app.use(cors());
app.use(express.json());

// Test the database connection
sequelize.authenticate()
  .then(() => console.log('✅ Database connected successfully'))
  .catch((error) => console.error('❌ Error connecting to the database:', error));

// Use user routes
app.use('/api/users', userRoutes);

// Define the PORT using the environment variable
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
