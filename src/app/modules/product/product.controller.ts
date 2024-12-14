import { Request, Response } from 'express';
import { productServices } from './product.service';
import productValidationSchema from './product.validation';
// import mongoose from 'mongoose';

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
    // checking result is true or not
    if (!result) {
      return res.status(404).json({
        success: false,
        message: `Product with ID ${productId} not found.`,
        error: 'No product found with the provided ID',
      });
    }

    // If the product is found, return the product details
    res.status(200).json({
      success: true,
      message: 'Specific Bicycle is retrieved successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'Something went wrong!',
      error: err,
    });
  }
};

const updateABicycle = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updatedData = req.body;

    const result = await productServices.updateABicycleFromDb(
      productId,
      updatedData,
    );

    // Checking if a document was matched and updated or not
    if (result.matchedCount === 0) {
      return res.status(404).json({
        success: false,
        message: `Product with ID ${productId} not found.`,
      });
    }

    res.status(200).json({
      success: true,
      message: 'Bicycle updated successfully',
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
};

//delete a bicycle
const deleteABicycle = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    //ck- throw an error if ObjectId is invalid
    const result = await productServices.deleteABicycleFromDb(productId);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: `Product with ID ${productId} not found.`,
        error: 'No product found with the provided ID'
      });
    }

    res.status(200).json({
      message: 'Bicycle deleted successfully',
      success: true,
      data: result
    });
  } catch (err: any) {
    res.status(500).json({
      message: 'An error occurred while deleting the bicycle',
      success: false,
      error: {
        name: err.name || 'UnknownError',
        details: err.message || 'An unexpected error occurred',
      },
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    });
  }
};


export const productController = {
  createBicycle,
  getAllBicycles,
  getASpecificBicycle,
  updateABicycle,
  deleteABicycle,
};
