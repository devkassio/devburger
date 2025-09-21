import { Router } from 'express';
import authMiddleware from './middlewares/auth';
import multer from 'multer';
import UserController from './app/controllers/UserController';
import multerConfig from './config/multer';
import SessionController from './app/controllers/SesssionController';
import ProductController from './app/controllers/ProductController';

const routes = Router();

const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
routes.post('/products', upload.single('file'), ProductController.store);
routes.get('/products', ProductController.index);

export default routes;