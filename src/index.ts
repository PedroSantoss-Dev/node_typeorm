import express from 'express';
import { route } from './routes';
import { AppDataSource } from './data-source';

AppDataSource.initialize().then(() => {
    const server = express();
    server.use(express.json());

    server.use(route);
    return server.listen(3000, () => {
        console.log('Server on');
    });
});
