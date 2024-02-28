import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class ProductService {
  constructor(private readonly databaseService: DatabaseService) {}
  create(createProductInput: CreateProductInput) {
    return this.databaseService.product.create({ data: createProductInput });
  }

  findAll() {
    return this.databaseService.product.findMany();
  }

  findOne(id: number) {
    return this.databaseService.product.findUnique({ where: { id } });
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    return this.databaseService.product.update({
      data: updateProductInput,
      where: { id },
    });
  }

  remove(id: number) {
    return this.databaseService.product.delete({ where: { id } });
  }
}
