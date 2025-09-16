import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World!' });
});

export default routes;