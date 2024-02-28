import { product } from '@prisma/client';
export declare class CreateProductInput implements Partial<product> {
    name: string;
    price: number;
}
