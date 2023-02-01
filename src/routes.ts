import { ReadUsersController } from './controllers/ReadUsersController';
import { Router, Request, Response } from 'express';
import { CreateUseController } from './controllers/CreateUserController';

const route = Router();
const readUsersController = new ReadUsersController();
const createUseController = new CreateUseController();
route.post('/', createUseController.handle);
route.get('/read', readUsersController.read);
export { route };
