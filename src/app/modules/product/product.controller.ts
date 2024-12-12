import { NextFunction, Request, Response } from 'express';
import { productServices } from './product.service';
import productValidationSchema from './product.validation';

const createBicycle = async (req: Request, res: Response, next: NextFunction) => {
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
  next();
};

//get all products

const getAllBicycles = async (req: Request, res: Response, next: NextFunction): Promise<Response |undefined> => {
  try {
    const { searchTerm } = req.query;
    const result = await productServices.getAllProductsFromDb(
      searchTerm as string,
    );
    if (!result.success) {
      return res.status(404).json({
        success: false,
        message: result.message, // "No products found matching your search criteria."
        data: result.data,
      });
    } else {
      res.status(200).json({
        success: true,
        message: 'Bicycles retrieved successfully',
        data: result,
      });
    }
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
  next()
};

export const productController = {
  createProduct: createBicycle,
  getAllProducts: getAllBicycles,
};
