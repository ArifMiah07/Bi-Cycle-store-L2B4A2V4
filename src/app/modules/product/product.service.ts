import { Product } from '../product.model';
import { TBicycle } from './product.interface';


//create a bicycle
const createBicyclesIntoDb = async (bicycleData: TBicycle) => {
  const result = await Product.create(bicycleData);
  return result;
};


//get all bicycle
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

//get a specific bicycle
const getASpecificBicycleFromDb = async (_id: string) => {
  const result = await Product.findOne({ _id });
  return result;
};


//update a specific bicycle
const updateABicycleFromDb = async (productId: string, updatedData: any) => {
  try {
    // Checking if the product exists
    const existingProduct = await Product.findById(productId);
    if (!existingProduct) {
      throw new Error(`Product with ID ${productId} not found.`);
    }

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

//soft delete a bicycle from db
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

export const productServices = {
  createBicyclesIntoDb,
  getAllBicyclesFromDb,
  getASpecificBicycleFromDb,
  updateABicycleFromDb,
  deleteABicycleFromDb,
};
