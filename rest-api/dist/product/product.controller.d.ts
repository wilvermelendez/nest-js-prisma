import { ProductService } from './product.service';
import { Prisma } from '@prisma/client';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
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
    findOne(id: string): Prisma.Prisma__productClient<{
        id: number;
        name: string;
        price: number;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: string, updateProductDto: Prisma.productUpdateInput): Prisma.Prisma__productClient<{
        id: number;
        name: string;
        price: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: string): Prisma.Prisma__productClient<{
        id: number;
        name: string;
        price: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
