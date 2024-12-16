import express from 'express'
import { orderController } from './order.controller';


//router
const router = express.Router();

//routes
router.post('/', orderController.orderABicycle);
router.get('/revenue', );



export const orderRoutes = router;