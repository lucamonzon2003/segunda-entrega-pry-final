import express from 'express';
import 'dotenv/config';
import _ from 'lodash';
import logger from 'morgan';

import { errorHandler } from './middlewares/errorHandler';
import router from './routes/index.routes';


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/health', (_req, res, next) => {
    try{
        res.status(200).json({
        succes: true,
        enviroment: process.env.ENVIROMENT,
        health: 'Up!'
    })}catch(err){
        next(err)
    }
});

app.use('/api', router);


app.use(errorHandler);
export default app;