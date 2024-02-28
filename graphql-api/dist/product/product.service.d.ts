import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { DatabaseService } from 'src/database/database.service';
export declare class ProductService {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    create(createProductInput: CreateProductInput): import(".prisma/client").Prisma.Prisma__productClient<{
        id: number;
        name: string;
        price: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: number;
        name: string;
        price: number;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__productClient<{
        id: number;
        name: string;
        price: number;
        createdAt: Date;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    update(id: number, updateProductInput: UpdateProductInput): import(".prisma/client").Prisma.Prisma__productClient<{
        id: number;
        name: string;
        price: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__productClient<{
        id: number;
        name: string;
        price: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
