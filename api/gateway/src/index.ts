import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { BooksResolver } from 'resolvers/books/books.resolver';
import { TenantResolver } from 'resolvers/tenant/tenant.resolver';
import { logger } from 'shared/config/logger';

const PORT = 8085;

async function main() {
  const app = express();

  logger.info(`Building schema for resolvers...`);
  const schema = await buildSchema({
    resolvers: [BooksResolver, TenantResolver],
    emitSchemaFile: true,
  });
  logger.info(`Schema is ready...`);

  logger.info(`Setup graphql http with graphiql`);
  app.use('/graphql', graphqlHTTP({ schema, graphiql: true }));
  logger.info(`GraphQL middleware is ready on /graphql`);
  app.listen(PORT, () => {
    logger.info(`Server is ready at http://localhost:${PORT}/graphql`);
  });
}

main();
