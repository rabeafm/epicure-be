import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db';
import router from './api/v1/ctrls/index';

dotenv.config({ path: './config/config.env' }); // load env variables
connectDB(); // connect to database

const app = express(); // run express

app.use(express.json()); // JSON parser
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === 'development') app.use(morgan('dev')); // dev logger middleware

app.use('/api/v1', router); // use router

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
