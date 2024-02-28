import Prisma from '@prisma/client';
export declare class Product implements Prisma.product {
    id: number;
    name: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
}
