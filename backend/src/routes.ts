import express from 'express';
import itensController from './controllers/itensController';
import pointsController from './controllers/pointsController';

const routes = express.Router();

routes.get('/itens',itensController.index) 

routes.post('/points', pointsController.store);
routes.get('/points/:id', pointsController.show)
routes.get('/points', pointsController.index);

export default routes;