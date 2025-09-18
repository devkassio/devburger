import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import ProductController from './app/controllers/ProductController';
import SessionController from './app/controllers/SesssionController';
import UserController from './app/controllers/UserController';

const routes = Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.post('/products', upload.single('file'), ProductController.store);

export default routes;