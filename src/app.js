import express from 'express';
import 'dotenv/config';
import _ from 'lodash';
import logger from 'morgan';

import {Server as HttpServer} from 'http';
import {Server as IoServer} from 'socket.io';

import { errorHandler } from './middlewares/errorHandler';
import router from './routes/index.routes';


const app = express();
const http = new HttpServer(app);
const io = new IoServer(http);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');

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


io.on('connection', async (socket) => {
    console.info('New client connect');
});

app.use(errorHandler);
export default http;