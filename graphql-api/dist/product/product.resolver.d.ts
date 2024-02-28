import { ProductService } from './product.service';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
export declare class ProductResolver {
    private readonly productService;
    constructor(productService: ProductService);
    createProduct(createProductInput: CreateProductInput): import(".prisma/client").Prisma.Prisma__productClient<{
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
    updateProduct(updateProductInput: UpdateProductInput): import(".prisma/client").Prisma.Prisma__productClient<{
        id: number;
        name: string;
        price: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    removeProduct(id: number): import(".prisma/client").Prisma.Prisma__productClient<{
        id: number;
        name: string;
        price: number;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
}
