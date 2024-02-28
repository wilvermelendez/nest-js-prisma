import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ProductService {
  constructor(private readonly databaseServioce: DatabaseService) {}
  create(createProductDto: Prisma.productCreateInput) {
    return this.databaseServioce.product.create({ data: createProductDto });
  }

  findAll() {
    return this.databaseServioce.product.findMany();
  }

  findOne(id: number) {
    return this.databaseServioce.product.findUnique({ where: { id } });
  }

  update(id: number, updateProductDto: Prisma.productUpdateInput) {
    return this.databaseServioce.product.update({
      data: updateProductDto,
      where: { id },
    });
  }

  remove(id: number) {
    return this.databaseServioce.product.delete({ where: { id } });
  }
}
