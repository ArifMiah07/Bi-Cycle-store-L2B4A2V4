

export type TOrder = {
  email: string;
  product: string;//using ObjectId and doing validation with zod is time waste. 
  quantity: number;
  totalPrice: number;
};

//
// email (string): The email address of the customer.
// product (ObjectId): The bicycle ordered. (unused ref)
// quantity (number): The quantity of the ordered bicycle.
// totalPrice (number): The total price (bicycle price * quantity).
