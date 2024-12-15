// order.controller.ts
import { Request, Response } from 'express';
import {orderServices } from './order.service';  // Correct import from order.service
import orderValidationSchema from './order.validation';

const orderABicycle = async (req: Request, res: Response) => {
  try {
    const { email, product, quantity, totalPrice } = req.body;

    // Validate with Zod
    const zodParsedData = orderValidationSchema.parse({ email, product, quantity, totalPrice });

    // Call the service function to process the order
    const result = await orderServices.orderABicycleFromDb(zodParsedData);

    // Send the response
    res.status(200).json({
      success: true,
      message: 'Bicycle ordered successfully',
      data: result,
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      res.status(500).json({
        message: 'An error occurred while creating the order',
        success: false,
        error: {
          name: err.name || 'UnknownError',
          details: err.message || 'An unexpected error occurred',
        },
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
      });
    } else {
      res.status(500).json({
        message: 'An unexpected error occurred',
        success: false,
        error: {
          name: 'UnknownError',
          details: 'An unexpected error occurred',
        },
      });
    }
  }
};

export const orderController = {
  orderABicycle,
};
