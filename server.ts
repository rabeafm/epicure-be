import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import router from './api/v1/ctrls/index.js';

// load env variables
dotenv.config({ path: './config/config.env' });
const port = process.env.PORT || 4000;

// connect to database
connectDB();

// run express
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// dev logger middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// use routes
app.use('/api/v1', router);

// activate server
const server = app.listen(port, () => {
  console.log(
    `Epicure server is running in ${process.env.NODE_ENV} mode on port ${port}`
  );
});

// handle unhandled promise rejections
process.on('unhandledRejection', (err: any, promise) => {
  console.log(`UnHandled Rejection Error: ${err.message}`);
  // close server & exit proccess
  server.close(() => process.exit(1));
});
