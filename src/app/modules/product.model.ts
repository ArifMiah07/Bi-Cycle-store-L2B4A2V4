import { Schema, model } from 'mongoose';
import { TBicycle, BicycleModel } from './product/product.interface';


// Define the Product schema
const productSchema = new Schema<TBicycle, BicycleModel>(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true,
    },
    brand: {
      type: String,
      required: [true, 'Brand is required'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price must be a positive number'],
    },
    type: {
      type: String,
      enum: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'],
      required: [true, 'Product type is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [0, 'Quantity must be a non-negative number'],
    },
    inStock: {
      type: Boolean,
      required: [true, 'In-stock status is required'],
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    }
  },
  {
    timestamps: true,
  },
);


//using middleware for delete operation


//query middleware

productSchema.pre('find', async function(next){
  // console.log(this, 'hi what app');
  this.find({isDeleted: {$ne : true}});
  next();
})
productSchema.pre('findOne', async function(next){
  // console.log(this, 'hi what app');
  this.find({isDeleted: {$ne : true}});
  next();
})

//[{'$match': {isDeleted: {$ne: true}}}, { '$match': { id: 'ST20241110' } }]

productSchema.pre('aggregate',  async function(next){
  this.pipeline().unshift({$match: {isDeleted : {$ne: true}}});
  next();
})



//model
export const Product = model<TBicycle, BicycleModel>('Product', productSchema);

// export const Student = model<TStudent, StudentModel>('Student', studentSchema);
