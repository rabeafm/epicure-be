import express from 'express';
import dotenv from 'dotenv';
import router from './api/v1/ctrls/index.js';

dotenv.config({path: './config.env'});

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/v1', router);

app.get('/ping', (req, res) => {
    res.send('Pong');
});

app.listen(port, () => {
    console.log(`Epicure server is on and running ${port}`);
});