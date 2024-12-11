import { z } from 'zod';

const productValidationSchema = z.object({
  name: z
    .string({ required_error: 'Name is required' })
    .min(1, 'Name cannot be empty'),
  brand: z
    .string({ required_error: 'Brand is required' })
    .min(1, 'Brand cannot be empty'),
  price: z
    .number({ required_error: 'Price is required' })
    .min(0, 'Price must be a positive number'),
  type: z.enum(['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'], {
    required_error: 'Type is required',
    invalid_type_error:
      'Type must be one of: Mountain, Road, Hybrid, BMX, Electric',
  }),
  description: z
    .string({ required_error: 'Description is required' })
    .min(1, 'Description cannot be empty'),
  quantity: z
    .number({ required_error: 'Quantity is required' })
    .int('Quantity must be an integer')
    .min(0, 'Quantity cannot be negative'),
  inStock: z
    .boolean({ required_error: 'InStock is required' })
    .refine((value) => typeof value === 'boolean', 'InStock must be a boolean'),
});


export default productValidationSchema;