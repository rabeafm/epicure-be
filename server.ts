import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db';
import router from './api/v1/ctrls/index';

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

/*
Add some data for all the content types.
Fix mongo queries
Create on the server a Search call that searches for all the content types. After creating it, we need to use this call in the Search input on the Frontend.
Search for an ingredient that appears on many dishes: if we click on one of the ingredients of a dish, we need to show all the dishes containing that ingredient.
*/