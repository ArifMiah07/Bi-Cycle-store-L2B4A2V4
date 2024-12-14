import { Product } from '../product.model';
import { TBicycle } from './product.interface';

const createBicyclesIntoDb = async (bicycleData: TBicycle) => {
  // if(await Product.isProductExist(bicycleData._id)){
  //     throw new Error("Product already exist");
  // }
  //as mongodb creating a unique _id every time so we don't need to check product exit or not.

  const result = await Product.create(bicycleData);
  return result;
};

const getAllBicyclesFromDb = async (searchTerm?: string) => {
  // console.log("Search Term:", searchTerm);
  let filter = {};
  if (searchTerm) {
    filter = {
      $or: [
        { name: { $regex: searchTerm, $options: 'i' } },
        { brand: { $regex: searchTerm, $options: 'i' } },
        { type: { $regex: searchTerm, $options: 'i' } },
      ],
    }; //using $or operator for one matching query value;
  }
  const result = await Product.find(filter).sort({ createdAt: -1 });
  return result;
};
// const getSingleStudentsFromDB = async (id: string) => {
//     // const result = await Student.findOne({ id });
//     const result = await Student.aggregate([
//       //pipeline 1
//       { $match: { id: id } },
//     ]);
//     return result;
//   };

const getASpecificBicycleFromDb = async (_id: string) => {
  const result = await Product.findOne({ _id });
  return result;
};

const updateABicycleFromDb = async (productId: string, updatedData: any) => {
  try {
    const result = await Product.updateOne(
      { _id: productId },
      { $set: updatedData },
      { new: true },
    );
    return result;
  } catch (err: any) {
    throw new Error(`Error updating bicycle:  ${err.message}`);
  }
};

//delete a bicycle from db
const deleteABicycleFromDb = async (_id: string) => {
  //checking if id already exist or not
  const existingProduct = await Product.findOne({ _id, isDeleted: false });
  if (!existingProduct) {
    throw new Error(`No product found with the provided ID ${_id}`);
  }

  //soft delete
  //A.findByIdAndUpdate(id, update, options)  // returns Query
  const result = await Product.findByIdAndUpdate(
    _id,
    {
      isDeleted: true,
      deletedAt: new Date(),
    },
    { new: true }, //option--- return updated doc
  );

  return result;
};
//delete students
// const deleteStudentsFromDB = async (id: string) => {
//     const result = await Student.updateOne({ id }, { isDeleted: true });
//     return result;
//   };

export const productServices = {
  createBicyclesIntoDb,
  getAllBicyclesFromDb,
  getASpecificBicycleFromDb,
  updateABicycleFromDb,
  deleteABicycleFromDb,
};
