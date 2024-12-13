
import { Product } from "../product.model";
import { TBicycle } from "./product.interface";


const createBicyclesIntoDb = async (bicycleData : TBicycle)=>{
    const result = await Product.create(bicycleData);

    return result;
};

const getAllBicyclesFromDb = async(searchTerm? : string)=>{
    // console.log("Search Term:", searchTerm);
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
// const getSingleStudentsFromDB = async (id: string) => {
//     // const result = await Student.findOne({ id });
//     const result = await Student.aggregate([
//       //pipeline 1
//       { $match: { id: id } },
//     ]);
//     return result;
//   };

const getASpecificBicycleFromDb = async(_id : string)=>{
    const result = await Product.findOne({_id});
    return result;

}

const updateABicycleFromDb = async(productId: string, updatedData : any)=>{
    try{
        const result = await Product.updateOne(
            {_id: productId},
            {$set: updatedData},
            {new : true},
        )
        return result;
    }catch(err : any){
        throw new Error('Error updating bicycle: ' + err.message);
    }
}


export const productServices = {
    createBicyclesIntoDb,
    getAllBicyclesFromDb,
    getASpecificBicycleFromDb,
    updateABicycleFromDb,
}