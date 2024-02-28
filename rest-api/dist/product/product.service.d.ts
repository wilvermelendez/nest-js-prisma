import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';
export declare class ProductService {
    private readonly databaseServioce;
    constructor(databaseServioce: DatabaseService);
    create(createProductDto: Prisma.productCreateInput): Prisma.Prisma__productClient<{
        id: number;
        name: string;
        price: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): Prisma.PrismaPromise<{
        id: number;
        name: string;
        price: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): Prisma.Prisma__productClient<{
        id: number;
        name: string;
        price: number;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateProductDto: Prisma.productUpdateInput): Prisma.Prisma__productClient<{
        id: number;
        name: string;
        price: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): Prisma.Prisma__productClient<{
        id: number;
        name: string;
        price: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
