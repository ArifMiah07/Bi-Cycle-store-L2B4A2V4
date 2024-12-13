import { Request, Response } from 'express';
import { productServices } from './product.service';
import productValidationSchema from './product.validation';

const createBicycle = async (req: Request, res: Response) => {
  try {
    const { bicycle: bicycleData } = req.body;
    //data validation using Zod
    const zodParsedData = productValidationSchema.parse(bicycleData);
    const result = await productServices.createProductIntoDb(zodParsedData);

    res.status(200).json({
      success: true,
      message: 'Bicycle created successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong!',
      error: err,
    });
  }
  // next();
};

//get all products

const getAllBicycles = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const result = await productServices.getAllProductsFromDb(
      searchTerm as string,
    );

    if(result.length === 0){
      res.status(404).json({
        success: false,
        message: 'No products found matching your search criteria.',
        error: "No matching products",
        data: result,
      });
    };
    
      res.status(200).json({
        success: true,
        message: 'Bicycles retrieved successfully',
        data: result,
      });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: {
        name: err.name || 'Error',
        details: err.details,
      },
    });
  }
  // next()
};

export const productController = {
  createProduct: createBicycle,
  getAllProducts: getAllBicycles,
};
