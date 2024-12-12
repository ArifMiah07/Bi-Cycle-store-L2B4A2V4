import { Request, Response } from "express";
import { productServices } from "./product.service";
import productValidationSchema from "./product.validation";



const createProduct = async(req:Request, res: Response) =>{
    try{
        const {bicycle : bicycleData} = req.body; 
        //data validation using Zod
        const zodParsedData = productValidationSchema.parse(bicycleData);
        const result = await productServices.createProductIntoDb(zodParsedData);

        res.status(200).json({
            success: true,
            message: 'Bicycle created successfully',
            data: result,
        })
    }catch(err : any){
        res.status(500).json({
            success: false,
            message: err.message || "Something went wrong!",
            error: err,
        })
    }
}

//get all products

const getAllProducts = async(req: Request, res:Response)=>{
    try{
        const  result = await productServices.getAllProductsFromDb();

        res.status(200).json({
            success: true,
            message: "Bicycles retrieved successfully",
            data: result,
        })
    }catch(err : any){
        res.status(500).json({
            success: false,
            message: err.message || "Something went wrong",
            error: {
                name: err.name || "Error",
                details: err.details,
            },
        })
    }
}

export const productController = {
    createProduct,
    getAllProducts,

}