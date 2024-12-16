// import { ObjectId } from 'mongoose';
// import { Product } from '../product.model';
import { Order } from '../order.model';
import { Product } from '../product.model';
// import { Product } from '../product.model';
import { TOrder } from './order.interface';

const orderABicycleFromDb = async (orderData: TOrder) => {
  // find product by id
  const productData = await Product.findById(orderData.product);
  if (!productData) {
      throw new Error('Product not found.');
  }

  console.log('pq', productData.quantity);

  // Check stock availability
  if (productData.quantity < orderData.quantity) {
      throw new Error('Insufficient stock for this order.');
  }

  // create the order
  const result = await Order.create(orderData);
  console.log('oq', orderData.quantity);

  // calculate the new quantity
  const currentQuantity = productData.quantity - orderData.quantity;
  console.log('cq', currentQuantity);

  // update the product stock and inStock flag
  if (!productData.isDeleted) {
      const newProductQuantity = await Product.findByIdAndUpdate(
          productData._id,
          {
              $set: {
                  quantity: currentQuantity,
                  inStock: currentQuantity > 0, //set inStock to false if quantity is 0
              },
          },
          { new: true } // new updated document//return
      );
      console.log('npq', newProductQuantity);
  } else {
      console.log('Product is deleted and cannot be updated.');
  }

  return result;
};






export const orderServices = {
  orderABicycleFromDb,
};
