import { Request, Response } from 'express';
import { productServices } from './product.service';
import productValidationSchema from './product.validation';

const createBicycle = async (req: Request, res: Response) => {
  try {
    const { bicycle: bicycleData } = req.body;
    //data validation using Zod
    const zodParsedData = productValidationSchema.parse(bicycleData);
    const result = await productServices.createBicyclesIntoDb(zodParsedData);

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
    const result = await productServices.getAllBicyclesFromDb(
      searchTerm as string,
    );
    //if user typing any name, type, brand that doesn't exist ---return error
    if (result.length === 0) {
      return res.status(404).json({
        //i got error here by adding return keyword
        success: false,
        message: 'No products found matching your search criteria.',
        error: 'No matching products',
        data: result,
      });
    }

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

const getASpecificBicycle = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.getASpecificBicycleFromDb(productId);
    //
    res.status(200).json({
      success: true,
      message: "Specific Bicycle is retrieved successfully!",
      data: result,
    })

  } catch (err : any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong!',
      error: err,
    });
  }
};

export const productController = {
  createBicycle,
  getAllBicycles,
  getASpecificBicycle,
};
