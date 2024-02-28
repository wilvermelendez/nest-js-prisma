import { InputType, Field } from '@nestjs/graphql';
import { product } from '@prisma/client';

@InputType()
export class CreateProductInput implements Partial<product> {
  @Field(() => String, { description: 'Example name (placeholder)' })
  name: string;
  @Field({ description: 'Example price (placeholder)' })
  price: number;
}
