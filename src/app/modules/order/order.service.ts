// import { ObjectId } from 'mongoose';
// import { Product } from '../product.model';
import { Order } from '../order.model';
// import { Product } from '../product.model';
import { TOrder } from './order.interface';

const orderABicycleFromDb = async (orderData : TOrder) => {
const result =  await Order.create(orderData);

return result;
}




export const orderServices = {
  orderABicycleFromDb,
};
