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
  },
  {
    timestamps: true,
  },
);

//model
export const Product = model<TBicycle, BicycleModel>('Product', productSchema);

// export const Student = model<TStudent, StudentModel>('Student', studentSchema);
