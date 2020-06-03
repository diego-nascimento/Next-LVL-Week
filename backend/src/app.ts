import path from 'path';
import express from 'express'
import routes from './routes';
import cors from 'cors';

const server = express();


server.use(cors())
server.use(express.json());
server.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
server.use(routes);

export default server;