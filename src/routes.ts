import { Router, Request, Response } from 'express';
import { CreateUseController } from './controllers/CreateUserController';

const route = Router();
const createUseController = new CreateUseController();
route.post('/',createUseController.handle);

export { route };
