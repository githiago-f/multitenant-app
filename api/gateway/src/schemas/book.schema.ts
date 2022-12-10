import { ObjectType, Field, InputType } from 'type-graphql';


@ObjectType()
export class Book {
  @Field()
  public readonly id!: number;

  @Field()
  public readonly title!: string;

  @Field()
  public readonly author!: string;
}

@InputType()
export class BookInput implements Pick<Book, "title" | "author"> {
  @Field()
  public title!: string;
  @Field()
  public author!: string;
}
