import express from 'express';
import { route } from './routes';

const server = express();
server.use(express.json())

server.use(route)
server.listen(3000, () => {
    console.log('Server on')
})