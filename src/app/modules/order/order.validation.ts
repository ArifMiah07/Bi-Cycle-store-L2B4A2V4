import z from 'zod';


const orderValidationSchema = z.object({
    email: z
    .string()
    .email('Invalid email address')
    .min(1, 'Email is required'),
  product: z.string(),
  quantity: z
    .number()
    .int('Quantity must be an integer')
    .positive('Quantity must be greater than zero'),
  totalPrice: z
    .number()
    .positive('Total price must be greater than zero'),
})


export default orderValidationSchema;