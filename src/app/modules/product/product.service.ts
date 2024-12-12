
import { Product } from "../product.model";
import { TProduct } from "./product.interface";


const createProductIntoDb = async (productData : TProduct)=>{
    const result = await Product.create(productData);

    return result;
};

const getAllProductsFromDb = async()=>{
    const result = Product.find();
    return result;
}


export const productServices = {
    createProductIntoDb,
    getAllProductsFromDb,
}