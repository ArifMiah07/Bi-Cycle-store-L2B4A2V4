import express from 'express';
import { productController } from './product.controller';

//router
const router = express.Router();

//routers
router.post('/', productController.createBicycle);

router.get('/', productController.getAllBicycles);

router.get('/:productId', productController.getASpecificBicycle);

router.put('/:productId', productController.updateABicycle);

router.delete('/:productId', productController.deleteABicycle);

export const productRoutes = router;

// No overload matches this call.
//   The last overload gave the following error.
//     Argument of type '(req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>' is not assignable to parameter of type 'Application<Record<string, any>>'.
//       Type '(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>) => Promise<...>' is missing the following properties from type 'Application<Record<string, any>>': init, defaultConfiguration, engine, set, and 63 more.ts(2769)
// index.d.ts(164, 5): The last overload is declared here.
// (alias) const productController: {
//     createBicycle: (req: express.Request, res: express.Response) => Promise<void>;
//     getAllBicycles: (req: express.Request, res: express.Response) => Promise<...>;
//     getASpecificBicycle: (req: express.Request, res: express.Response) => Promise<...>;
//     updateABicycle: (req: express.Request, res: express.Response) => Promise<...>;
//     deleteABicycle: (req: express.Request, res: express.Response) => Promise<...>;
// }
// import productController
// No quick fixes available
