
import { Product } from "../product.model";
import { TProduct } from "./product.interface";


const createBicyclesIntoDb = async (productData : TProduct)=>{
    const result = await Product.create(productData);

    return result;
};

const getAllBicyclesFromDb = async(searchTerm? : string)=>{
    console.log("Search Term:", searchTerm);
    let filter = {};
    if(searchTerm){
        filter = {$or: [{name:  { $regex: searchTerm, $options: 'i' }},{brand:  { $regex: searchTerm, $options: 'i' }}, {type:  { $regex: searchTerm, $options: 'i' }}]}//using $or operator for one matching query value;
    }
    const result = await Product.find(filter).sort({ createdAt: -1 });
    // if (result.length === 0) {
    //     return { success: false, message: "No products found matching your search criteria.", data: [] };
    //   }
    
    //   return { success: true, message: "Bicycles retrieved successfully", data: result };
    return result;
    
}


export const productServices = {
    createProductIntoDb: createBicyclesIntoDb,
    getAllProductsFromDb: getAllBicyclesFromDb,
}