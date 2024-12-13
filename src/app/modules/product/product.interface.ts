import { Model } from "mongoose";

export type TBicycle = {
    name: string;
    brand: string;
    price: number;
    type: 'Mountain' | 'Road' | 'Hybrid' | 'BMX' | 'Electric'
    description: string;
    quantity : number;
    inStock: boolean;
}


// export interface ProductModel extends Model<TProduct>{
//     isProductExist(id: string) : Promise<TProduct | null>
// }

// export interface StudentModel extends Model<TStudent> {
//     isUserExist(id: string) : Promise<TStudent | null> 
//  }
 
export type BicycleModel = Model<TBicycle>;