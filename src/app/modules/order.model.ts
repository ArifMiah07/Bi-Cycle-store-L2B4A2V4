import { model, Schema } from 'mongoose';
import { TOrder } from './order/order.interface';


export const orderSchema = new Schema<TOrder>(
  {
    email: {
      type: String,
      required: true,
    },
    product: {
      type: String,
      ref: 'Product',
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Order = model<TOrder>('Order', orderSchema);
