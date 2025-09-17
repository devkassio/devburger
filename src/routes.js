import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SesssionController';

const routes = Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

export default routes;