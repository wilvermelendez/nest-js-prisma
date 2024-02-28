import { ObjectType, Field, Int } from '@nestjs/graphql';
import Prisma from '@prisma/client';

@ObjectType()
export class Product implements Prisma.product {
  @Field(() => Int, { description: 'Example Id (placeholder)' })
  id: number;
  @Field(() => String, { description: 'Example name (placeholder)' })
  name: string;
  @Field({ description: 'Example price (placeholder)' })
  price: number;
  @Field(() => Date, { description: 'Example publishedAt (placeholder)' })
  createdAt: Date;
  @Field(() => Date, { description: 'Example publishedAt (placeholder)' })
  updatedAt: Date;
}
