export type TProduct = {
    name: string;
    brand: string;
    price: number;
    type: 'Mountain' | 'Road' | 'Hybrid' | 'BMX' | 'Electric'
    description: string;
    quantity : number;
    inStock: boolean;
}
// Mountain" | "Road" | "Hybrid" | "BMX" | "Electric"
// name (string): The name of the bicycle.
// brand (string): The brand of the bicycle.
// price (number): Price of the bicycle.
// type (string): The type of bicycle (e.g., Mountain, Road, Hybrid, BMX). Use an enum: Mountain, Road, Hybrid, BMX, Electric.
// description (string): A brief description of the bicycle.
// quantity (number): Quantity of the bicycle available.
// inStock (boolean): Indicates if the bicycle is in stock.