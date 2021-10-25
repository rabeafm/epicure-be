import dotenv from 'dotenv';
import connectDB from './config/db';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import MainRoutes from './routes';

dotenv.config({ path: './src/config/config.env' }); // load env variables
connectDB(); // connect to database

const app = express(); // run express
app.use(cors());

app.use(express.json()); // JSON parser
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); // Cookie parser

if (process.env.NODE_ENV === 'development') app.use(morgan('dev')); // dev logger middleware

const mainRoutes = new MainRoutes();
app.use('/api', mainRoutes.router); // use main router

const server = app.listen(process.env.PORT || 4000, () => {
  // activate server
  console.log(
    `Epicure server is running in ${process.env.NODE_ENV} mode on port ${
      process.env.PORT || 4000
    }`
  );
});

// handle unhandled promise rejections
process.on('unhandledRejection', (err: unknown, promise) => {
  console.log(`UnHandled Rejection Error: ${(err as Error).message}`);
  // close server & exit proccess
  server.close(() => process.exit(1));
});
