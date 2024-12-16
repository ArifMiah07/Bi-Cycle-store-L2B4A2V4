// order.controller.ts
import { Request, Response } from 'express';
import {orderServices } from './order.service';  // Correct import from order.service
import orderValidationSchema from './order.validation';


//post a bicycle
const orderABicycle = async (req: Request, res: Response) => {
  try {
    const {order : orderData}  = req.body;
    console.log('re: ',req.body);
    console.log('or: ', orderData.quantity);
    const zodParsedData = orderValidationSchema.parse(orderData);

    //
    const result = await orderServices.orderABicycleFromDb(zodParsedData);

    res.status(200).json({
      success: true,
      message: 'Order created successfully',
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
        message: 'An unexpected error occurred while created order ',
        success: false,
        error: {
          name: 'UnknownError',
          details: 'An unexpected error occurred',
        },
      });
    }
  }
};

//get revenue
const getRevenue = async(req: Request, res: Response) =>{
  try {
    const totalRevenue = await orderServices.calculateRevenueFromDb();
    res.status(200).json({
      message: "Revenue calculated successfully",
      success: true,
      data: {totalRevenue},
    })
  } catch (err: any) {
    res.status(500).json({
      message: 'An error occurred while calculating total revenue',
      success: false,
      error: {
        name: err.name || 'UnknownError',
        details: err.message || 'An unexpected error occurred',
      },
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    });
  }
}


export const orderController = {
  orderABicycle,
  getRevenue,
};
