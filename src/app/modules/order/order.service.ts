// import { ObjectId } from 'mongoose';
// import { Product } from '../product.model';
import { Order } from '../order.model';
import { Product } from '../product.model';
import { TOrder } from './order.interface';

const orderABicycleFromDb = async ({email, product, quantity, totalPrice} : TOrder) => {
// Check if the product exists
const productDoc = await Product.findById({product});

if (!productDoc) {
  throw new Error('Product not found');
}

// Check if the product has enough quantity in stock
if (productDoc.quantity < quantity) {
  throw new Error('Insufficient stock');
}

// Reduce the quantity of the product
productDoc.quantity -= quantity;

// If quantity is zero, set inStock to false
if (productDoc.quantity === 0) {
  productDoc.inStock = false;
}

await productDoc.save();

// Create the order
const newOrder = new Order({
  email,
  product,
  quantity,
  totalPrice,
});

await newOrder.save();

return newOrder;
};

export const orderServices = {
  orderABicycleFromDb,
};
