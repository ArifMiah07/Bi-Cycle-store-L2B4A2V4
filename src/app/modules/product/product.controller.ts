import { Request, Response } from "express";
import { productServices } from "./product.service";



const createProduct = async(req:Request, res: Response) =>{
    try{
        const Products = req.body; 

        const result = await productServices.createProductIntoDb(Products);

        res.status(200).json({
            success: true,
            message: 'Product created successfully!',
            data: result,
        })
    }catch(err){
        res.status(500).json({
            success: false,
            message: "Something went wrong!",
            error: err,
        })
    }
}

export const productController = {
    createProduct,

}