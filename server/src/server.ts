import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from '../src/routes/api/user-routes';
import sequelize from './config/database';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Test the database connection
sequelize.authenticate()
  .then(() => console.log('✅ Database connected successfully'))
  .catch((error) => {
    console.error('❌ Error connecting to the database:', error);
    process.exit(1);
  });

// Use user routes
app.use('/api/users', userRoutes);



// Ensure the server is listening on `0.0.0.0` to bind to all network interfaces
const PORT = parseInt(process.env.PORT || '3001', 10);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server is running on http://0.0.0.0:${PORT}`);
});


// Add error handlers for uncaught exceptions and promise rejections
process.on('uncaughtException', (err) => {
  console.error('❌ Uncaught Exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});
