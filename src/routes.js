import { Router } from 'express';
import ProductController from './app/controllers/ProductController';
import SessionController from './app/controllers/SesssionController';
import UserController from './app/controllers/UserController';

const routes = Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.post('/products', ProductController.store);

export default routes;