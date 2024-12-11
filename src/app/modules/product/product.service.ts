import { Product } from "../product.model";
import { TProduct } from "./product.interface";


const createProductIntoDb = async (productData : TProduct)=>{
    const result = await Product.create(productData);

    return result;
      //
//   if (await Student.isUserExist(studentData.id)) {
//     throw new Error('User already exist');
//   }
//   // const result = await StudentModel.create(student);//built-in static method
//   const result = await Student.create(studentData); //built-in static method

//   // const student = new Student(studentData);//create an instance

//   // if( await student.isUserExist(studentData.id)){
//   //   throw new Error('User already exist')
//   // }

//   // const result = await student.save();//built-in instance method- --- provided by Mongoose

//   return result;
};


export const productServices = {
    createProductIntoDb,
}