import { createLogger } from "bunyan";
import { Resolver } from "type-graphql";

@Resolver()
export class TenantResolver {
  private readonly logger = createLogger({ name: TenantResolver.name });
}
