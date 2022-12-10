import { Book } from "schemas/book.schema";
import { Arg, Query, Resolver } from "type-graphql";

@Resolver(() => Book)
export class BooksResolver {
  private readonly books = [
    {
      id: 1,
      title: "The Awakening",
      author: "Kate Chopin",
    },
    {
      id: 2,
      title: "City of Glass",
      author: "Paul Auster",
    },
  ];

  @Query(() => [Book], {name: 'books'})
  public async findAllBooks() {
    return this.books;
  }

  @Query(() => Book, { name: 'book' })
  public async findOneBook(@Arg('id') id: number) {
    return this.books.find(i => i.id === id);
  }
}
