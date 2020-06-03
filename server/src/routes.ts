import express from "express";
const routes = express.Router();
import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

const points = new PointsController();
const items = new ItemsController();

/** Routes to handle items requests */
routes.get('/items', items.listAll);
/** Routes to handle points requests */
routes.post('/points', points.create);
routes.get('/points/:id', points.show);
routes.get('/points', points.index);

export default routes;