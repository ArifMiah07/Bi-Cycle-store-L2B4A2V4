import { ObjectId } from "mongoose";

export type TOrder = {
    email: string;
    product: ObjectId;
    quantity: number;
    totalPrice: number;
}

//
// email (string): The email address of the customer.
// product (ObjectId): The bicycle ordered. (unused ref)
// quantity (number): The quantity of the ordered bicycle.
// totalPrice (number): The total price (bicycle price * quantity).