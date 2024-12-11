import express from "express"
import { productController } from "./product.controller";


//router
const router = express.Router();

//routers
router.post('/products', productController.createProduct);

export const productRoutes = router;

