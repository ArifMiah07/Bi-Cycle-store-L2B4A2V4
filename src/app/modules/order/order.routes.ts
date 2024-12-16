import express from 'express'
import { orderController } from './order.controller';


//router
const router = express.Router();

//routes
router.post('/', orderController.orderABicycle);
router.get('/revenue', orderController.getRevenue);



export const orderRoutes = router;